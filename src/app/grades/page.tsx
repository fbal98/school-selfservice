"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Navbar } from "@/components/layout/navbar";
import { grades, students, SubjectNames } from "@/lib/mock-data";
import { useTranslation } from "@/lib/i18n/useTranslation";

export default function GradesPage() {
  const { t, locale, isLoaded } = useTranslation();

  if (!isLoaded) {
    return null;
  }

  // For demo, we'll use the first student
  const student = students[0];
  const studentGrades = grades.filter((g) => g.studentId === student.id);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container py-6">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                {t("grades")}
              </h1>
              <p className="text-muted-foreground">{t("track.grades")}</p>
            </div>
            <div className="flex gap-4">
              <Select defaultValue="fall-2023">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={t("select.semester")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fall-2023">{t("fall.2023")}</SelectItem>
                  <SelectItem value="spring-2024">
                    {t("spring.2024")}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Current Grades */}
          <div className="grid gap-6 md:grid-cols-2">
            {studentGrades.map((grade) => (
              <Card key={grade.subject}>
                <CardHeader>
                  <CardTitle className="capitalize">
                    {SubjectNames[grade.subject][locale]}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {t("current.grade")}: {grade.score}%
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Progress value={grade.score} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>90%</span>
                      <span className="text-muted-foreground">
                        {t("assignments")}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>95%</span>
                      <span className="text-muted-foreground">
                        {t("tests")}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>85%</span>
                      <span className="text-muted-foreground">
                        {t("participation")}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Grade History */}
          <Card>
            <CardHeader>
              <CardTitle>{t("grade.history")}</CardTitle>
              <p className="text-sm text-muted-foreground">
                {t("view.history")}
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="w-16 text-green-500 font-medium">95%</div>
                  <div className="flex-1">
                    <p className="font-medium">{t("math.quiz")}</p>
                    <p className="text-sm text-muted-foreground">
                      Nov 15, 2023
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 text-yellow-500 font-medium">88%</div>
                  <div className="flex-1">
                    <p className="font-medium">{t("english.essay")}</p>
                    <p className="text-sm text-muted-foreground">
                      Nov 10, 2023
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 text-green-500 font-medium">92%</div>
                  <div className="flex-1">
                    <p className="font-medium">{t("science.lab")}</p>
                    <p className="text-sm text-muted-foreground">Nov 5, 2023</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
