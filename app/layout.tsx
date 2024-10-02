import { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import {NextUIProvider} from "@nextui-org/react";
import './globals.css'


export const metadata : Metadata = {
  title: "Book Collection Tracker",
  description: "A Nextjs and Supabase app used to track reading of book ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Book Tracker Collection</title>
      </head>
      <body>
        <ClerkProvider>
          {children}
        </ClerkProvider>
      </body>
    </html>

  );
}
