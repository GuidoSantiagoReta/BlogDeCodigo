import React from 'react';
import Article from '../Article/Article';
import articlesData from '../Article/articlesData.json';


const DataBase = () => {
    const dataBaseArticle = articlesData.find(article => article.id === 'database');
    return (
      <Article article={dataBaseArticle} />
    );
  };
  
export default DataBase