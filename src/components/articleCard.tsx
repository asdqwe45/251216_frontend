import React from 'react';

interface ArticleCardProps {
  title: string;
  summary: string;
  imageUrl: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, summary, imageUrl }) => {
  return (
    <div className="block border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
      <div className="relative w-full h-48">
        <img className="w-full h-full object-cover" src={imageUrl} alt={title} />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{summary}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
