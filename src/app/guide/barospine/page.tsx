"use client";

import GuidePageTemplate from "@/components/GuidePageTemplate";
import { useLang } from "@/i18n";

const EXERCISE_IMAGES = [
  "/images/barospine-pro.png",
  "/images/barospine.png",
  "/images/barospine-pro.png",
];

export default function BarospineGuidePage() {
  const { t } = useLang();

  const exercises = t.guideBarospine.exercises.map((ex, i) => ({
    title: ex.title,
    desc: ex.desc,
    image: EXERCISE_IMAGES[i],
  }));

  return (
    <GuidePageTemplate
      category={t.nav.guideSub[0].label}
      categoryKey="barospine"
      subtitle={t.guideBarospine.badge}
      title={t.guideBarospine.title}
      description={t.guideBarospine.desc}
      exercises={exercises}
    />
  );
}
