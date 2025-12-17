import SummaryBlock from "@/components/summaryBlock";
import AiInsightTab from "@/components/aiInsightTab";

interface ArticlePageProps {
  params: { slug: string };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  // In a real application, you would fetch article data based on the slug.
  const articleData = {
    title: "정부, AI 산업 육성을 위한 새로운 정책 발표",
    publishDate: "2024년 5월 14일",
  };

  const dummySummary = [
    "AI 산업 육성을 위한 새로운 정책이 발표되었으며, 향후 5년간 1조 원의 예산 투입 계획을 포함합니다.",
    "이번 정책은 AI 기술 개발 가속화와 전문 인재 양성을 핵심 목표로 삼고 있습니다.",
    "정부는 규제 완화와 세제 혜택을 통해 민간 투자를 활성화하고 글로벌 경쟁력을 확보하겠다고 밝혔습니다.",
  ];

  const dummyArticleContent = `
    <p>정부가 인공지능(AI) 산업을 미래 국가 성장 동력으로 삼고, 전폭적인 지원에 나선다. 과학기술정보통신부는 오늘(14일) 'AI 국가 전략'을 발표하며, 향후 5년간 총 1조 원 규모의 예산을 투입하여 기술 개발과 인재 양성에 집중하겠다고 밝혔다.</p>
    <br/>
    <p>이번 전략의 핵심은 '선택과 집중'이다. 정부는 반도체, 바이오, 에너지 등 국내 주력 산업과 AI 기술의 융합을 촉진하고, 경쟁력 있는 분야를 중심으로 연구개발(R&D) 지원을 강화할 방침이다. 특히, 차세대 AI 기술로 주목받는 '설명가능 AI(XAI)'와 '생성형 AI' 분야에 대한 투자를 확대한다.</p>
    <br/>
    <p>또한, AI 전문 인재 10만 명 양성을 목표로 대학 내 AI 관련 학과 신설 및 정원 확대를 지원하고, 산업계와 연계한 맞춤형 교육 프로그램을 개발하여 현장 중심의 인재를 육성할 계획이다. 이를 위해 정부는 규제 샌드박스 제도를 적극 활용하여 기업들이 새로운 AI 서비스를 자유롭게 실험하고 출시할 수 있는 환경을 조성하겠다고 약속했다.</p>
    <br/>
    <p>전문가들은 이번 정책이 국내 AI 생태계에 활력을 불어넣을 것으로 기대하면서도, 지속적인 투자와 함께 실질적인 성과로 이어지기 위한 구체적인 실행 계획이 중요하다고 조언했다.</p>
  `;

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">{articleData.title}</h1>
      <p className="text-gray-500 mb-6">게시일: {articleData.publishDate}</p>

      {/* AI 3줄 요약 */}
      <SummaryBlock summaryLines={dummySummary} />

      {/* 기사 본문 */}
      <article className="prose lg:prose-xl max-w-none my-8" dangerouslySetInnerHTML={{ __html: dummyArticleContent }} />

      {/* AI Insight 탭 */}
      <AiInsightTab />
    </div>
  );
}
