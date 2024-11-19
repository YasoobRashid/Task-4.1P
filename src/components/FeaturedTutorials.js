import React from 'react';
import { Header, Button } from 'semantic-ui-react';
import TutorialCard from './TutorialCard';
import './FeaturedContent.css';

const FeaturedTutorials = () => (
  <>
    <Header as="h2" textAlign="center">Featured Tutorials</Header>
    <div className="grid-container">
      {[...Array(3)].map((_, i) => (
        <div className="card-container" key={i}>
          <TutorialCard />
        </div>
      ))}
    </div>
    <Button fluid>See all tutorials</Button>
  </>
);

export default FeaturedTutorials;
