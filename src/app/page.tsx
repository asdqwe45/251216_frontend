import ArticleCard from "@/components/articleCard";
import Link from "next/link";

export default function Home() {
  const dummyArticles = [
    {
      slug: "ai-policy-2024",
      title: "정부, AI 산업 육성을 위한 새로운 정책 발표",
      summary: "이번 정책은 AI 기술 개발과 인재 양성에 초점을 맞추고 있으며, 향후 5년간 1조 원의 예산을 투입할 계획이라고 밝혔습니다.",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      slug: "global-economy-inflation",
      title: "글로벌 경제, 인플레이션 우려 속 성장 둔화",
      summary: "주요 경제 지표들이 하락세를 보이며 전문가들 사이에서 경기 침체에 대한 우려가 커지고 있습니다.",
      imageUrl: "https://images.unsplash.com/photo-1554433607-66b3705c5885?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      slug: "next-gen-battery",
      title: "차세대 배터리 기술, 상용화 눈앞에",
      summary: "국내 연구진이 기존 배터리보다 효율이 2배 높은 신소재를 개발하여 전기차 시장에 큰 변화를 예고하고 있습니다.",
      imageUrl: "https://images.unsplash.com/photo-1614299786988-295f769066a5?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
     {
      slug: "space-exploration-milestone",
      title: "민간 우주 탐사, 새로운 이정표를 세우다",
      summary: "최초의 민간 유인 우주선이 성공적으로 발사되어 우주 관광 시대의 본격적인 시작을 알렸습니다.",
      imageUrl: "https://images.unsplash.com/photo-1610296669228-602fa8272fcf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      slug: "sustainable-agriculture",
      title: "지속 가능한 농업 기술, 식량 위기 해결할까",
      summary: "기후 변화에 대응하고 안정적인 식량 공급을 위해 AI와 드론을 활용한 스마트 농업 기술이 주목받고 있습니다.",
      imageUrl: "https://images.unsplash.com/photo-1627920769854-419b48b7f212?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      slug: "remote-work-culture",
      title: "원격 근무의 확산, 기업 문화의 새로운 표준",
      summary: "팬데믹 이후 많은 기업들이 하이브리드 근무 모델을 도입하며, 유연한 근무 환경이 조직의 생산성에 미치는 영향에 대한 연구가 활발히 진행되고 있습니다.",
      imageUrl: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">오늘의 주요 뉴스</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dummyArticles.map((article) => (
          <Link href={`/article/${article.slug}`} key={article.slug} className="block h-full">
            <ArticleCard
              title={article.title}
              summary={article.summary}
              imageUrl={article.imageUrl}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
