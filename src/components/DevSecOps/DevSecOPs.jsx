import React from 'react';
import Article from '../Article/Article';
import articlesData from '../Article/articlesData.json';

const DevSecOps = () => {
  const DevSecOpsArticle = articlesData.find(article => article.id === 'devsecops');
  return (
    <Article article={DevSecOpsArticle} />
   
  );
};

export default DevSecOps