
import { ReactNode } from "react";
import { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import {NextUIProvider} from "@nextui-org/react";
import './globals.css'


export const metadata : Metadata = {
  title: "Book Collection Tracker",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <NextUIProvider>
          {children}
          </NextUIProvider>
        </body>
      </html>
  </ClerkProvider>
  );
}
