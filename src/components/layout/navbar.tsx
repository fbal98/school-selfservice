"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { LanguageSwitcher } from "./language-switcher";

const navigation = [
  { name: "dashboard" as const, href: "/dashboard" },
  { name: "grades" as const, href: "/grades" },
  { name: "schedule" as const, href: "/schedule" },
  { name: "teachers.dir" as const, href: "/teachers" },
  { name: "contact.us" as const, href: "/contact" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const { t, dir, isLoaded } = useTranslation();

  // During SSR and initial client render, don't show the navbar
  if (!isLoaded) {
    return null;
  }

  return (
    <nav className="border-b" dir={dir}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/dashboard">
                <h1 className="text-xl font-bold">{t("school.portal")}</h1>
              </Link>
            </div>
            <div
              className={cn(
                "hidden sm:flex sm:space-x-8 rtl:space-x-reverse",
                dir === "rtl" ? "sm:mr-6" : "sm:ml-6"
              )}
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium",
                    pathname === item.href
                      ? "border-primary text-foreground"
                      : "border-transparent text-muted-foreground hover:border-gray-300 hover:text-foreground"
                  )}
                >
                  {t(item.name)}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 rtl:space-x-reverse">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              aria-label="notifications"
            >
              <Bell className="h-5 w-5" />
              <span
                className={cn(
                  "absolute flex h-2 w-2 rounded-full bg-red-600",
                  dir === "rtl" ? "left-1 top-1" : "right-1 top-1"
                )}
              ></span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
