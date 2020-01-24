import React from "react";
import articleContent from "./article-content";
import ArticlesList from './ArticlesList';
import "../index.css";

const ArticlePage = ({ match }) => {

  const name = match.params.name;
  const article = articleContent.find(article => article.name === name);

  //filtering all articles that are not listed
  const otherArticles = articleContent.filter(article => article.name !== name);

  if (!article) return <h1> Article does not exist</h1>;
  return (
    <div className="app2">
      <h1>{article.title}</h1>
      <div className="para">
        {article.content.map((paragraph, key) => (
          <p key={key}> {paragraph} </p>
        ))}       
         </div>
        <div className="wrapper">
          <h3> Other Articles: </h3>
          <ArticlesList articles={otherArticles} />

      </div>
    </div>
  );
};

export default ArticlePage;
