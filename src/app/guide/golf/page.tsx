"use client";

import GuidePageTemplate from "@/components/GuidePageTemplate";
import { useLang } from "@/i18n";

const EXERCISE_IMAGES = [
  "/images/barospine-pro.png",
  "/images/barospine.png",
  "/images/barospine-pro.png",
];

export default function GolfGuidePage() {
  const { t } = useLang();

  const exercises = t.guideGolf.exercises.map((ex, i) => ({
    title: ex.title,
    desc: ex.desc,
    image: EXERCISE_IMAGES[i],
  }));

  return (
    <GuidePageTemplate
      category={t.nav.guideSub[2].label}
      categoryKey="golf"
      subtitle={t.guideGolf.badge}
      title={t.guideGolf.title}
      description={t.guideGolf.desc}
      exercises={exercises}
    />
  );
}
