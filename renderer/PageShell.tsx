import React from "react";
import { PageContextProvider } from "./usePageContext";
import type { PageContext } from "./types";
import "./globalStyle.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function PageShell({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </PageContextProvider>
    </React.StrictMode>
  );
}
