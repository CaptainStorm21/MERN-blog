import React from 'react';
import ArticlesList from './ArticlesList';
import articleContent from './article-content';

const ArticlesListPage = () => (
    <div className="app2">
    <h1>Articles</h1>
    <ArticlesList articles={articleContent} />
    </div>
);

export default ArticlesListPage;