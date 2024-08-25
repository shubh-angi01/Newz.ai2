// src/components/NewsCard.js
import React from 'react';

function NewsCard({ article }) {
  const { urlToImage, title, description, source, publishedAt, url } = article;

  const formattedDate = new Date(publishedAt).toLocaleString('en-US', {
    timeZone: 'Asia/Jakarta',
  });

  // Handling missing image and description
  const handleImageError = (e) => {
    e.target.src = 'path/to/placeholder-image.jpg'; // Provide a placeholder image
  };

  return (
    <div 
      className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
      onClick={() => window.open(url, '_blank')}
      role="button" 
      tabIndex={0}
      onKeyPress={(e) => { if (e.key === 'Enter') window.open(url, '_blank'); }}
    >
      <div className="relative">
        <img 
          src={urlToImage || 'path/to/placeholder-image.jpg'} 
          alt={title || 'News image'}
          className="w-full h-48 object-cover"
          onError={handleImageError}
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 truncate">
          {title}
        </h3>
        <h6 className="text-gray-600 text-sm mb-2">
          {source.name} · {formattedDate}
        </h6>
        <p className="text-gray-700 text-base truncate">
          {description}
        </p>
      </div>
    </div>
  );
}

export default NewsCard;
