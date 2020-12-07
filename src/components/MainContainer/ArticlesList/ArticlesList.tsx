import React, { PureComponent } from 'react';
import Article from './Article';

class ArticlesList extends PureComponent {
  render() {
    return (
      <div className="main-container-articles-list">
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    );
  }
}

export default ArticlesList;
