"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { validOTPs } from "@/lib/mock-data";
import { useTranslations } from "../lib/i18n/useTranslations";

export default function LoginPage() {
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const t = useTranslations();

  const handleRequestOTP = () => {
    if (!/^\d{8,12}$/.test(phone)) {
      setError(t("invalid.phone"));
      return;
    }

    if (!validOTPs[phone]) {
      setError(t("invalid.phone"));
      return;
    }

    setError("");
    setStep("otp");
  };

  const handleVerifyOTP = () => {
    if (!/^\d{6}$/.test(otp)) {
      setError(t("invalid.otp"));
      return;
    }

    if (validOTPs[phone] === otp) {
      router.push("/dashboard");
    } else {
      setError(t("invalid.otp"));
    }
  };

  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          {t("school.portal")}
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">
                {t("welcome.back")}
              </CardTitle>
              <CardDescription className="text-center">
                {step === "phone" ? t("enter.phone") : t("enter.otp")}
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              {step === "phone" ? (
                <div className="grid gap-2">
                  <Label htmlFor="phone">{t("phone.number")}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder={t("phone.placeholder")}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    maxLength={12}
                  />
                </div>
              ) : (
                <div className="grid gap-2">
                  <Label htmlFor="otp">{t("otp")}</Label>
                  <Input
                    id="otp"
                    type="text"
                    placeholder={t("otp.placeholder")}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength={6}
                  />
                </div>
              )}
              {error && (
                <p className="text-sm text-destructive text-center">{error}</p>
              )}
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              {step === "phone" ? (
                <Button className="w-full" onClick={handleRequestOTP}>
                  {t("get.otp")}
                </Button>
              ) : (
                <>
                  <Button className="w-full" onClick={handleVerifyOTP}>
                    {t("verify.otp")}
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      setStep("phone");
                      setOtp("");
                      setError("");
                    }}
                  >
                    {t("enter.phone")}
                  </Button>
                </>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
