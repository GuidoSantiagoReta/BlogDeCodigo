import React from 'react';
import Article from '../Article/Article';
import articlesData from '../Article/articlesData.json';


const Testing = () => {
    const testingArticle = articlesData.find(article => article.id === 'testing');
    return (
      <Article article={testingArticle} />
    );
  };

export default Testing