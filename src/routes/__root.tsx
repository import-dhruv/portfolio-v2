import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-medium text-foreground">404</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          this page doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="text-sm text-foreground underline underline-offset-4 hover:opacity-70"
          >
            go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-medium text-foreground">
          something went wrong.
        </h1>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="text-sm text-foreground underline underline-offset-4 hover:opacity-70"
          >
            try again
          </button>
          <a
            href="/"
            className="text-sm text-muted-foreground underline underline-offset-4 hover:opacity-70"
          >
            go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dhruv Patel — AI Engineer" },
      {
        name: "description",
        content:
          "Dhruv Patel is an AI engineer building intelligent systems, LLM tools, and quiet software that helps data become decisions.",
      },
      { name: "author", content: "Dhruv Patel" },
      { property: "og:title", content: "Dhruv Patel — AI Engineer" },
      {
        property: "og:description",
        content:
          "Dhruv Patel is an AI engineer building intelligent systems, LLM tools, and quiet software that helps data become decisions.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Dhruv Patel" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dhruv Patel — AI Engineer" },
      {
        name: "twitter:description",
        content:
          "Dhruv Patel is an AI engineer building intelligent systems, LLM tools, and quiet software that helps data become decisions.",
      },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e0eef830-6a8b-4714-a75b-643cf5a5aeb1/id-preview-7e080f7f--ba12d166-1c98-4a13-ae33-995d568e805e.lovable.app-1783760430266.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e0eef830-6a8b-4714-a75b-643cf5a5aeb1/id-preview-7e080f7f--ba12d166-1c98-4a13-ae33-995d568e805e.lovable.app-1783760430266.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Caveat:wght@500;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground">
        <Outlet />
      </div>
    </QueryClientProvider>
  );
}
