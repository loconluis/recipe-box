import React from 'react';
import { 
  ListGroup,
  Container,
  Row,
  Col,
  } from 'reactstrap';
import IngredientsItems from './IngredientsItems';

class ingredientsList extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <ListGroup>
            {
              this.props.ingredients.map(ing => <IngredientsItems name={ing} key={ing}/>)
            }
            </ListGroup>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ingredientsList;
