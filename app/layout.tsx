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
