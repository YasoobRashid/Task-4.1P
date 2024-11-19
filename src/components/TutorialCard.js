import './TutorialCard.css';
import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import { faker } from '@faker-js/faker';

const TutorialCard = () => (
  <Card className="tutorial-card">
    <Image src={`https://picsum.photos/200/150?random=${Math.random()}`} wrapped ui={false} />
    <Card.Content>
      <Card.Header className="tutorial-card-header">{faker.lorem.words(3)}</Card.Header>
      <Card.Meta className="tutorial-card-meta">{faker.lorem.word()}</Card.Meta>
      <Card.Description className="tutorial-card-description">{faker.lorem.sentences(2)}</Card.Description>
    </Card.Content>
    <Card.Content extra className="tutorial-card-footer">
      <Icon name='star' /> 5 Username
    </Card.Content>
  </Card>
);

export default TutorialCard;
