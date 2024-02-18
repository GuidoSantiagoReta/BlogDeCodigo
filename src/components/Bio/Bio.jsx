import React from 'react';
import Article from '../Article/Article';
import articlesData from '../Article/articlesData.json';



const Bio = () => {
  const bioArticle = articlesData.find(article => article.id === 'bio');
  return (
    <Article article={bioArticle} />
  );
};

export default Bio;