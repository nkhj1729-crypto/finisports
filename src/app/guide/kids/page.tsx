import GuidePageTemplate from "@/components/GuidePageTemplate";

const EXERCISES = [
  {
    title: "키즈 기본 스트레칭",
    desc: "바로스파인 위에 아이가 편안하게 누워 양팔을 머리 위로 뻗어줍니다. 성장기 아이의 척추 정렬과 자세 교정에 도움이 되며, 5~10분 정도 부드럽게 진행합니다.",
    image: "/images/barospine.png",
  },
  {
    title: "키즈 복부 스트레칭",
    desc: "바로스파인에 배를 대고 엎드린 자세에서 양팔로 상체를 천천히 들어올립니다. 복부 근육을 이완하고 척추의 유연성을 키워주는 동작입니다.",
    image: "/images/barospine-pro.png",
  },
  {
    title: "키즈 하체 스트레칭",
    desc: "바로스파인 위에 앉아 다리를 앞으로 뻗고, 천천히 상체를 앞으로 숙여줍니다. 햄스트링과 허리 유연성을 높여주며, 성장통 완화에도 도움이 됩니다.",
    image: "/images/barospine.png",
  },
];

export default function KidsGuidePage() {
  return (
    <GuidePageTemplate
      category="키즈"
      categoryKey="kids"
      subtitle="Kids Guide"
      description="성장기 아이들을 위한 바로스파인 운동 가이드입니다. 올바른 자세 습관을 어릴 때부터 만들어주세요."
      exercises={EXERCISES}
    />
  );
}
