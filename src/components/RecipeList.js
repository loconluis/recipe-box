import React from 'react';
import { 
  ListGroup,
  Container,
  Row,
  Col,
  } from 'reactstrap';
import RecipeItems from './RecipeItems';
import data from '../utils/data';

class RecipeList extends React.Component {
  render() {
    // console.log(data);
    return (
      <Container>
        <Row>
          <Col>
            <ListGroup>
            {
              data.map((recipe, i) => <RecipeItems key={i} name={recipe.title} ingredients={recipe.ingredients} />)
            }
            </ListGroup>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default RecipeList;
