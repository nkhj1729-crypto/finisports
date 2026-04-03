"use client";

import GuidePageTemplate from "@/components/GuidePageTemplate";
import { useLang } from "@/i18n";

const EXERCISE_IMAGES = [
  "/images/barospine.png",
  "/images/barospine-pro.png",
  "/images/barospine.png",
];

export default function KidsGuidePage() {
  const { t } = useLang();

  const exercises = t.guideKids.exercises.map((ex, i) => ({
    title: ex.title,
    desc: ex.desc,
    image: EXERCISE_IMAGES[i],
  }));

  return (
    <GuidePageTemplate
      category={t.nav.guideSub[1].label}
      categoryKey="kids"
      subtitle={t.guideKids.badge}
      title={t.guideKids.title}
      description={t.guideKids.desc}
      exercises={exercises}
    />
  );
}
