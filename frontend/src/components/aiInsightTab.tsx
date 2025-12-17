'use client';

import React, { useState } from 'react';

type Tab = 'terms' | 'timeline' | 'prosCons';

const AiInsightTab = () => {
  const [activeTab, setActiveTab] = useState<Tab>('terms');

  const renderContent = () => {
    switch (activeTab) {
      case 'terms':
        return (
          <div>
            <h3 className="font-bold text-lg">핵심 용어 해설</h3>
            <div className="mt-2 space-y-2">
              <p><strong className="text-blue-600">특정 기술 용어:</strong> AI가 분석한 이 용어에 대한 상세하고 이해하기 쉬운 설명입니다. 위키피디아, 관련 뉴스 아카이브 등의 정보를 종합하여 제공됩니다.</p>
              <p><strong className="text-blue-600">관련 기업/시장 동향:</strong> 이 용어와 관련된 주요 기업들의 최근 동향 및 시장의 변화에 대한 분석 정보입니다.</p>
            </div>
          </div>
        );
      case 'timeline':
        return (
          <div>
            <h3 className="font-bold text-lg">관련 사건 타임라인 (추후 개발)</h3>
            <p className="mt-2 text-gray-500">이 사건의 흐름을 파악할 수 있도록 AI가 관련 과거 사건들을 타임라인 형태로 시각화하여 제공할 예정입니다.</p>
          </div>
        );
      case 'prosCons':
        return (
          <div>
            <h3 className="font-bold text-lg">찬반 논점 비교 (추후 개발)</h3>
            <p className="mt-2 text-gray-500">이 이슈에 대한 다양한 시각을 이해할 수 있도록 AI가 주요 찬반 논점과 근거를 비교 테이블 형태로 제시할 예정입니다.</p>
          </div>
        );
      default:
        return null;
    }
  };

  const getTabClassName = (tabName: Tab) =>
    `px-4 py-2 font-semibold rounded-t-lg transition-colors duration-300 focus:outline-none ${
      activeTab === tabName
        ? 'bg-white border-gray-200 border-l border-t border-r -mb-px text-blue-600'
        : 'text-gray-500 hover:text-blue-500 bg-gray-50'
    }`;

  return (
    <div className="my-6">
        <div className="flex border-b">
            <button onClick={() => setActiveTab('terms')} className={getTabClassName('terms')}>
            AI Insight: 핵심 용어
            </button>
            <button onClick={() => setActiveTab('timeline')} className={getTabClassName('timeline')}>
            관련 사건 타임라인
            </button>
            <button onClick={() => setActiveTab('prosCons')} className={getTabClassName('prosCons')}>
            찬반 논점 비교
            </button>
        </div>
        <div className="p-4 bg-white border border-t-0 rounded-b-lg">
            {renderContent()}
        </div>
    </div>
  );
};

export default AiInsightTab;
