import React from 'react';

interface SummaryBlockProps {
  summaryLines: string[];
}

const SummaryBlock: React.FC<SummaryBlockProps> = ({ summaryLines }) => {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded">
      <h2 className="text-lg font-bold mb-2 text-blue-800">AI 3줄 요약</h2>
      <ul className="list-disc pl-5 space-y-1">
        {summaryLines.map((line, index) => (
          <li key={index} className="text-gray-700">{line}</li>
        ))}
      </ul>
      <div className="text-right mt-2">
        <button className="text-sm text-gray-500 hover:text-gray-700">이 요약에 대한 의견을 알려주세요</button>
      </div>
    </div>
  );
};

export default SummaryBlock;
