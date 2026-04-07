const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <span className="font-mono">&lt;AI.Dev /&gt;</span>
      <span>© {new Date().getFullYear()} Dhruv Patel. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;
