import GuidePageTemplate from "@/components/GuidePageTemplate";

const EXERCISES = [
  {
    title: "목/어깨 폼롤러 마사지",
    desc: "미니 폼롤러를 목 뒤에 대고 천천히 좌우로 굴려줍니다. 뭉친 승모근과 경추 주변 근육을 이완시켜 거북목 완화와 어깨 긴장 해소에 효과적입니다.",
    image: "/images/mini-foamroller.jpg",
  },
  {
    title: "등/허리 폼롤러 스트레칭",
    desc: "폼롤러를 등 아래에 놓고 무릎을 세운 상태에서 위아래로 천천히 굴려줍니다. 흉추와 요추 주변의 근막을 풀어주며, 장시간 앉아있는 분께 추천합니다.",
    image: "/images/mini-foamroller.jpg",
  },
  {
    title: "하체 폼롤러 릴리스",
    desc: "폼롤러 위에 허벅지 앞/뒤, 종아리를 올려놓고 체중을 실어 천천히 굴려줍니다. 운동 전후 근막 이완으로 근육통 예방과 회복에 도움이 됩니다.",
    image: "/images/half-foamroller.jpg",
  },
];

export default function FoamrollerGuidePage() {
  return (
    <GuidePageTemplate
      category="폼롤러"
      categoryKey="foamroller"
      subtitle="Foam Roller Guide"
      description="미니 폼롤러와 하프 폼롤러를 활용한 셀프 마사지 및 근막 이완 가이드입니다."
      exercises={EXERCISES}
    />
  );
}
