import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const ArticlesList = ({ articles }) => (
  <div class="wrapper para1">
    {articles.map((article, key) => (
      <Link
        className="article-list-item"
        key={key}
        to={`/article/${article.name}`}
      >
        <h4>{article.title}</h4>
        <p>{article.content[0].substring(0, 150)}...</p>
      </Link>
    ))}
  </div>
);

export default ArticlesList;
