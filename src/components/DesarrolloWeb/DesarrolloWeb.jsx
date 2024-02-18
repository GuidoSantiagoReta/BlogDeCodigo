import React from 'react';
import Article from '../Article/Article';
import articlesData from '../Article/articlesData.json';

const DesarrolloWeb = () => {
  const webDevArticle = articlesData.find(article => article.id === 'desarrollo-web');
  return (
    <Article article={webDevArticle} />
  );
};

export default DesarrolloWeb;