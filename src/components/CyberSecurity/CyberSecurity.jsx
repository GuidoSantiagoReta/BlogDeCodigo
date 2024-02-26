import React from 'react';
import Article from '../Article/Article';
import articlesData from '../Article/articlesData.json';

const CyberSecurity = () => {
  const securityArticle = articlesData.find(article => article.id === 'security');
  return (
    <Article article={securityArticle} />
  );
};


export default CyberSecurity