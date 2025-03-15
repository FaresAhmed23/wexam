"use client"

import { useLanguage } from "@/contexts/language-context"
import { Clock, Users, Eye, Layout } from "lucide-react"
import { useEffect, useRef } from "react"

export default function FeaturesSection() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const animatedElements = document.querySelectorAll(".animate-on-scroll")
    animatedElements.forEach((el) => observer.observe(el))

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const features = [
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: t("features.automated.title"),
      description: t("features.automated.description"),
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: t("features.timing.title"),
      description: t("features.timing.description"),
    },
    {
      icon: <Eye className="h-10 w-10 text-primary" />,
      title: t("features.focus.title"),
      description: t("features.focus.description"),
    },
    {
      icon: <Layout className="h-10 w-10 text-primary" />,
      title: t("features.unified.title"),
      description: t("features.unified.description"),
    },
  ]

  return (
    <section id="features" ref={sectionRef} className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("features.title")}</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow animate-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

