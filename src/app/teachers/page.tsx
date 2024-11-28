"use client";

import * as React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar";
import { teachers, SubjectNames } from "@/lib/mock-data";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { Mail, Phone } from "lucide-react";

export default function TeachersPage() {
  const { t, locale, isLoaded } = useTranslation();
  const [searchQuery, setSearchQuery] = React.useState("");

  if (!isLoaded) {
    return null;
  }

  const filteredTeachers = teachers.filter((teacher) =>
    teacher.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container py-6">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                {t("teacher.directory")}
              </h1>
              <p className="text-muted-foreground">{t("view.teachers")}</p>
            </div>
          </div>

          {/* Search */}
          <div className="flex gap-4">
            <Input
              type="search"
              placeholder={t("search.teachers")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-sm"
            />
          </div>

          {/* Teacher Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {filteredTeachers.map((teacher) => (
              <Card key={teacher.id}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16">
                      <div className="absolute right-0 top-0 h-4 w-4 rounded-full bg-green-500 ring-2 ring-white" />
                      <img
                        src={teacher.photoUrl}
                        alt={teacher.name}
                        className="rounded-full object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{teacher.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {teacher.subjects
                          .map((subject) => SubjectNames[subject][locale])
                          .join(", ")}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      <span>{teacher.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      <span>{teacher.phone}</span>
                    </div>
                    <Button className="w-full" variant="outline">
                      {t("schedule.meeting")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Office Hours */}
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">{t("office.hours")}</h2>
              <p className="text-sm text-muted-foreground">
                {t("available.times")}
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {teachers.map((teacher) => (
                  <div
                    key={teacher.id}
                    className="flex justify-between items-center border-b pb-4 last:border-0 last:pb-0"
                  >
                    <div>
                      <p className="font-medium">{teacher.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {teacher.subjects
                          .map((subject) => SubjectNames[subject][locale])
                          .join(", ")}
                      </p>
                    </div>
                    <div className="text-sm text-right">
                      <p>{t("office.hours.mon.wed")}</p>
                      <p>{t("office.hours.tue.thu")}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
