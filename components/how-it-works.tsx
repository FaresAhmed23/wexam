"use client"

import { useLanguage } from "@/contexts/language-context"
import { Play, Link, Settings } from "lucide-react"

export default function HowItWorks() {
  const { t } = useLanguage()

  const steps = [
    {
      icon: <Play className="h-8 w-8 text-white" />,
      title: t("howItWorks.step1.title"),
      description: t("howItWorks.step1.description"),
    },
    {
      icon: <Link className="h-8 w-8 text-white" />,
      title: t("howItWorks.step2.title"),
      description: t("howItWorks.step2.description"),
    },
    {
      icon: <Settings className="h-8 w-8 text-white" />,
      title: t("howItWorks.step3.title"),
      description: t("howItWorks.step3.description"),
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("howItWorks.title")}</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 max-w-xs mx-auto animate-on-scroll">
              <div className="flex flex-col items-center">
                <div className="bg-primary rounded-full p-4 mb-6">{step.icon}</div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-foreground/70">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block h-0.5 w-16 bg-primary/30 absolute right-0 top-1/2 transform translate-x-1/2"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

