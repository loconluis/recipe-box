import React, { Component } from 'react'
import { ListGroupItem, Button, Collapse, Card, CardBody } from 'reactstrap';
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
        { this.props.name }
        <Button color="primary" onClick={this.toggle}>Toggle</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <h3 className="text-center">Ingredients</h3>
              <IngredientsList ingredients={this.props.ingredients} />
            </CardBody>
          </Card>
        </Collapse>
      </ListGroupItem>
    )
  }
}

export default RecipeItems;