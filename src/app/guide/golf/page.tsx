import GuidePageTemplate from "@/components/GuidePageTemplate";

const EXERCISES = [
  {
    title: "골프 어깨 스트레칭",
    desc: "바로스파인 위에 누워 양팔을 좌우로 벌려 가슴을 열어줍니다. 골프 스윙 시 필요한 어깨 가동범위를 넓혀주고, 라운드 전후 어깨 부상을 예방합니다.",
    image: "/images/barospine-pro.png",
  },
  {
    title: "골프 척추 회전 스트레칭",
    desc: "바로스파인에 등을 대고 누운 상태에서 무릎을 세우고 좌우로 천천히 돌려줍니다. 흉추의 회전력을 높여 더 부드러운 스윙을 만드는 데 도움이 됩니다.",
    image: "/images/barospine.png",
  },
  {
    title: "골프 고관절 스트레칭",
    desc: "바로스파인 위에 앉아 한쪽 발목을 반대 무릎 위에 올린 뒤 천천히 눕습니다. 고관절 유연성을 높여 안정적인 하체 회전과 파워 전달을 돕습니다.",
    image: "/images/barospine-pro.png",
  },
];

export default function GolfGuidePage() {
  return (
    <GuidePageTemplate
      category="골프"
      categoryKey="golf"
      subtitle="Golf Guide"
      description="골퍼를 위한 바로스파인 컨디셔닝 가이드입니다. 스윙에 필요한 유연성과 회전력을 기르세요."
      exercises={EXERCISES}
    />
  );
}
