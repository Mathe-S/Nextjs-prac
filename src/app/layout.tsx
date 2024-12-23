import "~/styles/globals.css";
import "@uploadthing/react/styles.css";

import { type Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { TopNav } from "./_components/topnav";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import React from "react";
import { Toaster } from "sonner";
import { CSPostHogProvider } from "./_analytics/provider";

export const metadata: Metadata = {
  title: "Next Prac",
  description: "A practice project for Next.js",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <CSPostHogProvider>
        <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        <html lang="en">
          <body className={`dark font-sans`}>
            <div className="grid h-screen grid-rows-[auto,1fr]">
              <TopNav />
              <main className="overflow-y-scroll">{props.children}</main>
            </div>
            {props.modal}
            <div id="modal-root" />
            <Toaster theme="dark" />
          </body>
        </html>
      </CSPostHogProvider>
    </ClerkProvider>
  );
}
