import React from 'react';
import Article from '../Article/Article';
import articlesData from '../Article/articlesData.json';



const Scripting = () => {
  const webDevArticle = articlesData.find(article => article.id === 'scripting');

  return (
    <Article article={webDevArticle} />
  )
}

export default Scripting