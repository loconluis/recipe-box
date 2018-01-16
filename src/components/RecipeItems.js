import React, { Component } from 'react'
import { 
  ListGroupItem,
  Button,
  Collapse,
  Card,
  CardBody,
  Container,
  Row,
  Col,
} from 'reactstrap';
// Components
import IngredientsList from './IngredientsList';

class RecipeItems extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state= { collapse: false };;
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render () {
    return (
      <ListGroupItem>
        <div className="list-flex">
          <p>{ this.props.name }</p>
          <Button
            color="primary"
            onClick={this.toggle}
            className="btn-not-than-big"
          >{this.state.collapse ? 'Close' : 'Open'}</Button>
        </div>
        <Collapse
          className="collapse-div"
          isOpen={this.state.collapse}
        >
          <Card>
            <CardBody>
              <h3 className="text-center">Ingredients</h3>
              <IngredientsList ingredients={this.props.ingredients} />
              <Container >
                <Row>
                  <Col>
                    <Button
                      color="danger"
                      className="delete-btn btn-big"
                      onClick={(e) => { this.props.handleDeleteRecipe(this.props.name) }}
                    >Delete</Button>
                  </Col>
                </Row>
              </Container>
            </CardBody>
          </Card>
        </Collapse>
      </ListGroupItem>
    )
  }
}

export default RecipeItems;