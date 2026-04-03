import GuidePageTemplate from "@/components/GuidePageTemplate";

const EXERCISES = [
  {
    title: "기본 스트레칭",
    desc: "바로스파인 홈에 엉덩이를 대고 앉아 천천히 뒤로 누운 뒤, 양팔을 머리 위로 올려 가슴과 어깨의 가동범위를 늘려줍니다. 레벨매트를 목에 대고 무리가 가지 않도록 운동하면 좋습니다.",
    image: "/images/barospine-pro.png",
  },
  {
    title: "골반 스트레칭",
    desc: "바로스파인의 하이탑 부분에 한쪽다리를 안쪽으로 접어 양팔은 앞으로 길게 뻗어주고, 반대쪽 다리는 쭉 편 상태에서 미들탑에 대어줍니다. 천천히 상체를 앞으로 숙여주며 골반을 고정합니다.",
    image: "/images/barospine.png",
  },
  {
    title: "하체 스트레칭",
    desc: "엉덩이를 하이탑 끝 부분에 놓은 채 바닥에 누워 꼬리뼈를 바닥에 지지한 상태에서 한 발은 바로스파인에, 반대 발은 무릎 위에 올린 채 몸 쪽으로 당겨줍니다.",
    image: "/images/barospine-pro.png",
  },
];

export default function BarospineGuidePage() {
  return (
    <GuidePageTemplate
      category="바로스파인"
      categoryKey="barospine"
      subtitle="Barospine Guide"
      description="바로스파인을 활용한 척추 스트레칭과 체형 교정 운동을 안내합니다. 올바른 자세로 매일 10분씩 실천해보세요."
      exercises={EXERCISES}
    />
  );
}
