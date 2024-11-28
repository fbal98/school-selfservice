"use client";

import * as React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { useTranslation } from "@/lib/i18n/useTranslation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { dir, isLoaded } = useTranslation();

  // During SSR and initial client render, use LTR
  if (!isLoaded) {
    return (
      <html lang="en" dir="ltr">
        <body className={inter.className}>{children}</body>
      </html>
    );
  }

  return (
    <html lang="en" dir={dir}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
