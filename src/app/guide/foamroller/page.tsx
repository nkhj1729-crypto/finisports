"use client";

import GuidePageTemplate from "@/components/GuidePageTemplate";
import { useLang } from "@/i18n";

const EXERCISE_IMAGES = [
  "/images/mini-foamroller.jpg",
  "/images/mini-foamroller.jpg",
  "/images/half-foamroller.jpg",
];

export default function FoamrollerGuidePage() {
  const { t } = useLang();

  const exercises = t.guideFoamroller.exercises.map((ex, i) => ({
    title: ex.title,
    desc: ex.desc,
    image: EXERCISE_IMAGES[i],
  }));

  return (
    <GuidePageTemplate
      category={t.nav.guideSub[3].label}
      categoryKey="foamroller"
      subtitle={t.guideFoamroller.badge}
      title={t.guideFoamroller.title}
      description={t.guideFoamroller.desc}
      exercises={exercises}
    />
  );
}
