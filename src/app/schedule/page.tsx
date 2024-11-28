"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Navbar } from "@/components/layout/navbar";
import { schedules, students, teachers, SubjectNames } from "@/lib/mock-data";
import { Calendar, Clock } from "lucide-react";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { cn } from "@/lib/utils";

const days = ["monday", "tuesday", "wednesday", "thursday", "friday"] as const;
const timeSlots = [
  "08:00-09:30",
  "09:45-11:15",
  "11:30-13:00",
  "14:00-15:30",
  "15:45-17:15",
] as const;

export default function SchedulePage() {
  const { t, dir, locale, isLoaded } = useTranslation();

  if (!isLoaded) {
    return null;
  }

  // For demo, we'll use the first student
  const student = students[0];
  const studentSchedule = schedules.filter((s) => s.studentId === student.id);

  const getCurrentClass = () => {
    const now = new Date();
    const day = days[now.getDay() - 1]; // 0 is Sunday
    const currentTime = `${now.getHours().toString().padStart(2, "0")}:${now
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;

    return studentSchedule.find((schedule) => {
      const [start, end] = schedule.timeSlot.split("-");
      return schedule.day === day && currentTime >= start && currentTime <= end;
    });
  };

  const currentClass = getCurrentClass();

  return (
    <div className="min-h-screen bg-background" dir={dir}>
      <Navbar />
      <main className="container py-6">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                {t("class.schedule")}
              </h1>
              <p className="text-muted-foreground">{t("view.schedule")}</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Current Class Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  {t("current.class")}
                </CardTitle>
                <CardDescription>
                  {currentClass
                    ? `${SubjectNames[currentClass.subject][locale]} (${
                        currentClass.timeSlot
                      })`
                    : t("no.class")}
                </CardDescription>
              </CardHeader>
              {currentClass && (
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t("room")}</span>
                      <span className="font-medium">{currentClass.room}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        {t("teacher")}
                      </span>
                      <span className="font-medium">
                        {
                          teachers.find((t) => t.id === currentClass.teacherId)
                            ?.name
                        }
                      </span>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>

            {/* Today's Schedule Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  {t("today.schedule")}
                </CardTitle>
                <CardDescription>{t("upcoming.classes")}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {studentSchedule
                    .filter((s) => s.day === days[new Date().getDay() - 1])
                    .map((schedule, index) => (
                      <div
                        key={index}
                        className={cn(
                          "flex justify-between items-center border-b pb-2 last:border-0",
                          dir === "rtl" && "rtl:space-x-reverse"
                        )}
                      >
                        <div>
                          <p className="font-medium">
                            {SubjectNames[schedule.subject][locale]}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {t("room")} {schedule.room}
                          </p>
                        </div>
                        <p className="text-sm font-medium">
                          {schedule.timeSlot}
                        </p>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Weekly Schedule */}
          <Card>
            <CardHeader>
              <CardTitle>{t("weekly.schedule")}</CardTitle>
              <CardDescription>{t("complete.schedule")}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="border p-2 bg-muted">{t("class.time")}</th>
                      {days.map((day) => (
                        <th key={day} className="border p-2 bg-muted">
                          {t(day)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {timeSlots.map((timeSlot) => (
                      <tr key={timeSlot}>
                        <td className="border p-2 font-medium">{timeSlot}</td>
                        {days.map((day) => {
                          const classInfo = studentSchedule.find(
                            (s) => s.day === day && s.timeSlot === timeSlot
                          );
                          return (
                            <td key={day} className="border p-2">
                              {classInfo ? (
                                <div>
                                  <p className="font-medium">
                                    {SubjectNames[classInfo.subject][locale]}
                                  </p>
                                  <p className="text-sm text-muted-foreground">
                                    {t("room")} {classInfo.room}
                                  </p>
                                </div>
                              ) : (
                                <span className="text-muted-foreground">-</span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
