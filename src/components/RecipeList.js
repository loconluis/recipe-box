import React from 'react';
import { 
  ListGroup,
  Container,
  Row,
  Col,
  } from 'reactstrap';
import RecipeItems from './RecipeItems';

export default ({ recipes }) => {
  return (
    <Container>
      <Row>
        <Col>
          <ListGroup>
          {
            recipes.map((recipe, i) => <RecipeItems key={i} name={recipe.title} ingredients={recipe.ingredients} />)
          }
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

