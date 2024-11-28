"use client";

import * as React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Navbar } from "@/components/layout/navbar";
import { students, grades } from "@/lib/mock-data";
import { Calendar, GraduationCap, Users, MessageSquare } from "lucide-react";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { cn } from "@/lib/utils";
import type { translations } from "@/lib/i18n/translations";

type TranslationKey = keyof typeof translations.en;

const quickActions = [
  {
    title: "view.grades" as TranslationKey,
    icon: GraduationCap,
    href: "/grades",
    color: "text-blue-600",
  },
  {
    title: "class.schedule" as TranslationKey,
    icon: Calendar,
    href: "/schedule",
    color: "text-green-600",
  },
  {
    title: "teachers" as TranslationKey,
    icon: Users,
    href: "/teachers",
    color: "text-purple-600",
  },
  {
    title: "contact" as TranslationKey,
    icon: MessageSquare,
    href: "/contact",
    color: "text-orange-600",
  },
];

const activities = [
  {
    title: "new.grade" as TranslationKey,
    description: "اختبار الرياضيات - الفصل الثالث",
    date: "hours.ago" as TranslationKey,
    value: "2",
  },
  {
    title: "upcoming.test" as TranslationKey,
    description: "اختبار العلوم - الفصل الخامس",
    date: "days.ago" as TranslationKey,
    value: "1",
  },
  {
    title: "teacher.note" as TranslationKey,
    description: "الطالب نشيط جداً في الفصل",
    date: "days.ago" as TranslationKey,
    value: "2",
  },
];

export default function DashboardPage() {
  const { t, dir } = useTranslation();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // For demo, we'll use the first student
  const student = students[0];
  const studentGrades = grades.filter((g) => g.studentId === student.id);
  const gpa =
    studentGrades.reduce((acc, grade) => acc + grade.score, 0) /
    studentGrades.length;

  return (
    <div className="min-h-screen bg-background" dir={dir}>
      <Navbar />
      <main className="container py-6">
        <div className="flex flex-col gap-8">
          {/* Student Profile Section */}
          <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>{t("student.profile")}</CardTitle>
                <CardDescription>{t("manage.info")}</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-2xl font-bold">
                      {student.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{student.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t("grade")} {student.grade} • {t("age")} {student.age}
                    </p>
                  </div>
                </div>
                <div className="grid gap-2">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">
                      {t("current.gpa")}
                    </span>
                    <span className="font-medium">{gpa.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">
                      {t("attendance")}
                    </span>
                    <span className="font-medium">95%</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">
                      {t("class.rank")}
                    </span>
                    <span className="font-medium">15 {t("of")} 120</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t("quick.actions")}</CardTitle>
                <CardDescription>{t("features")}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {quickActions.map((action) => (
                    <Link
                      key={action.title}
                      href={action.href}
                      className={cn(
                        "flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted transition-colors",
                        dir === "rtl" && "rtl:space-x-reverse"
                      )}
                    >
                      <action.icon className={`h-6 w-6 ${action.color}`} />
                      <span className="text-sm font-medium">
                        {t(action.title)}
                      </span>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Recent Activity Section */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle>{t("recent.activity")}</CardTitle>
                <CardDescription>{t("latest.updates")}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activities.map((activity, index) => (
                    <div
                      key={index}
                      className={cn(
                        "flex justify-between items-start pb-4 last:pb-0 last:border-0 border-b",
                        dir === "rtl" && "rtl:space-x-reverse"
                      )}
                    >
                      <div>
                        <h4 className="font-medium">{t(activity.title)}</h4>
                        <p className="text-sm text-muted-foreground">
                          {activity.description}
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {activity.value} {t(activity.date)}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
}
