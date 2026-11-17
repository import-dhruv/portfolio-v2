import { useEffect, useRef } from "react";

/**
 * Interactive particle network background — a native canvas recreation of the
 * particles.js configuration used on https://nathanchen.me/
 *
 * Sparse triangle particles in the site's own accent palette (sky blue,
 * magenta, violet, indigo), softly pulsing, drifting slowly, linking with
 * nearby particles, repelled on hover and pushed on click.
 */
type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  radiusStep: number;
  radiusDir: number;
  opacity: number;
  opacityStep: number;
  opacityDir: number;
  angle: number;
  spin: number;
  color: string;
};

// The same accents used across the site: cyan gradient ring / magenta &
// violet glow / indigo in the resume button.
const PALETTE = [
  "34, 211, 238",   // sky blue / cyan
  "217, 70, 239",   // magenta
  "139, 92, 246",   // violet
  "129, 140, 248",  // indigo
];
const LINK_DISTANCE = 150;
const LINK_OPACITY = 0.28;
const HOVER_RADIUS = 130;
const MAX_PARTICLES = 60;

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles: Particle[] = [];
    let raf = 0;
    const mouse = { x: -1000, y: -1000, active: false };

    const rand = (min: number, max: number) => min + Math.random() * (max - min);

    function makeParticle(x?: number, y?: number): Particle {
      const px = x ?? rand(0, width);
      const py = y ?? rand(0, height);
      const baseRadius = rand(1.5, 6);
      const angle = rand(0, Math.PI * 2);
      const speed = rand(0.5, 1.4);
      return {
        x: px,
        y: py,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: baseRadius,
        baseRadius,
        radiusStep: rand(0.05, 0.18),
        radiusDir: Math.random() > 0.5 ? 1 : -1,
        opacity: rand(0.25, 0.8),
        opacityStep: rand(0.004, 0.014),
        opacityDir: Math.random() > 0.5 ? 1 : -1,
        angle: rand(0, Math.PI * 2),
        spin: rand(-0.008, 0.008),
        color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
      };
    }

    function targetCount() {
      // particles.js density: (area / 1000) / value_area * value
      const count = Math.round((width * height) / 1000 / 300 * 8);
      return Math.min(MAX_PARTICLES, Math.max(12, count));
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = Math.floor(width * dpr);
      canvas!.height = Math.floor(height * dpr);
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const target = targetCount();
      if (particles.length > target) particles.length = target;
      while (particles.length < target) particles.push(makeParticle());
    }

    function step() {
      ctx!.clearRect(0, 0, width, height);

      for (const p of particles) {
        if (!reduce) {
          p.x += p.vx;
          p.y += p.vy;
          p.angle += p.spin;

          // bounce off edges
          if (p.x <= 0 || p.x >= width) p.vx *= -1;
          if (p.y <= 0 || p.y >= height) p.vy *= -1;
          p.x = Math.max(0, Math.min(width, p.x));
          p.y = Math.max(0, Math.min(height, p.y));

          // pulsing opacity and size
          p.opacity += p.opacityStep * p.opacityDir;
          if (p.opacity >= 0.8 || p.opacity <= 0.12) p.opacityDir *= -1;
          p.radius += p.radiusStep * p.radiusDir;
          if (p.radius >= p.baseRadius || p.radius <= 0.3) p.radiusDir *= -1;

          // hover repulse
          if (mouse.active) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const dist = Math.hypot(dx, dy);
            if (dist > 0 && dist < HOVER_RADIUS) {
              const force = (HOVER_RADIUS - dist) / HOVER_RADIUS;
              p.x += (dx / dist) * force * 4;
              p.y += (dy / dist) * force * 4;
            }
          }
        }

        ctx!.save();
        ctx!.translate(p.x, p.y);
        ctx!.rotate(p.angle);
        ctx!.beginPath();
        ctx!.moveTo(0, -p.radius);
        ctx!.lineTo(p.radius, p.radius);
        ctx!.lineTo(-p.radius, p.radius);
        ctx!.closePath();
        ctx!.shadowBlur = 8;
        ctx!.shadowColor = `rgba(${p.color}, 0.55)`;
        ctx!.fillStyle = `rgba(${p.color}, ${p.opacity})`;
        ctx!.fill();
        ctx!.shadowBlur = 0;
        ctx!.restore();
      }

      // connecting lines
      ctx!.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DISTANCE) {
            const alpha = LINK_OPACITY * (1 - dist / LINK_DISTANCE) * Math.min(a.opacity, b.opacity);
            const gradient = ctx!.createLinearGradient(a.x, a.y, b.x, b.y);
            gradient.addColorStop(0, `rgba(${a.color}, ${alpha})`);
            gradient.addColorStop(1, `rgba(${b.color}, ${alpha})`);
            ctx!.strokeStyle = gradient;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      if (!reduce) raf = requestAnimationFrame(step);
    }

    function onPointerMove(e: PointerEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    }
    function onPointerLeave() {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    }
    function onClick(e: MouseEvent) {
      if (particles.length >= MAX_PARTICLES) return;
      for (let i = 0; i < 4; i++) {
        particles.push(makeParticle(e.clientX, e.clientY));
      }
    }

    resize();
    step();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerout", onPointerLeave);
    window.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerout", onPointerLeave);
      window.removeEventListener("click", onClick);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className="pointer-events-none fixed inset-0 -z-10" />;
}
