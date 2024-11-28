"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Navbar } from "@/components/layout/navbar";
import { contactRequests, teachers, SubjectNames } from "@/lib/mock-data";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const { t, dir, locale, isLoaded } = useTranslation();

  if (!isLoaded) {
    return null;
  }

  const timeSlots = [
    "14:00 2023-12-01",
    "15:00 2023-12-01",
    "14:00 2023-12-02",
    "15:00 2023-12-02",
  ];

  return (
    <div className="min-h-screen bg-background" dir={dir}>
      <Navbar />
      <main className="container py-6">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              {t("contact.requests")}
            </h1>
            <p className="text-muted-foreground">{t("request.meetings")}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Request History */}
            <Card>
              <CardHeader>
                <CardTitle>{t("request.history")}</CardTitle>
                <CardDescription>{t("view.requests")}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {contactRequests.map((request) => {
                    const teacher = teachers.find(
                      (t) => t.id === request.teacherId
                    );
                    return (
                      <div
                        key={request.id}
                        className="flex items-start justify-between border-b pb-4 last:border-0 last:pb-0"
                      >
                        <div className="space-y-1">
                          <p className="font-medium">
                            {t("meeting.with")} {teacher?.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {request.reason}
                          </p>
                          <div className="flex items-center gap-2">
                            <span
                              className={cn(
                                "inline-flex h-2 w-2 rounded-full",
                                request.status === "pending" && "bg-yellow-400",
                                request.status === "approved" && "bg-green-400",
                                request.status === "rejected" && "bg-red-400"
                              )}
                            />
                            <span className="text-sm text-muted-foreground">
                              {t(request.status)}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {new Date(request.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* New Request */}
            <Card>
              <CardHeader>
                <CardTitle>{t("new.request")}</CardTitle>
                <CardDescription>{t("schedule.teacher")}</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      {t("select.teacher")}
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={t("choose.teacher")} />
                      </SelectTrigger>
                      <SelectContent>
                        {teachers.map((teacher) => (
                          <SelectItem key={teacher.id} value={teacher.id}>
                            {teacher.name} -{" "}
                            {teacher.subjects
                              .map((subject) => SubjectNames[subject][locale])
                              .join(", ")}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <label className="text-sm font-medium">
                      {t("preferred.time")}
                    </label>
                    <div className="space-y-2">
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder={t("select.first")} />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>
                              {slot}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder={t("select.second")} />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>
                              {slot}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      {t("additional.notes")}
                    </label>
                    <Textarea
                      placeholder={t("notes.placeholder")}
                      className="min-h-[100px]"
                    />
                  </div>

                  <Button className="w-full">{t("submit.request")}</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
