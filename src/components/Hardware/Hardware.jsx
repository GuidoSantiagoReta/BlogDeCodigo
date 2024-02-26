import React from 'react';
import Article from '../Article/Article';
import articlesData from '../Article/articlesData.json';

const Hardware = () => {
  const hardwareArticle = articlesData.find(article => article.id === 'hardware');
  return (
    <Article article={hardwareArticle} />
  );
};

export default Hardware