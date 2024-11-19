import React from 'react';
import { Header, Button } from 'semantic-ui-react';
import ArticleCard from './ArticleCard';
import './FeaturedContent.css';

const FeaturedArticles = () => (
  <>
    <Header as="h2" textAlign="center">Featured Articles</Header>
    <div className="grid-container">
      {[...Array(3)].map((_, i) => (
        <div className="card-container" key={i}>
          <ArticleCard />
        </div>
      ))}
    </div>
    <Button fluid>See all articles</Button>
  </>
);

export default FeaturedArticles;
