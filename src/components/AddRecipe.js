import React, { Component } from 'react';
import { Button,
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

class AddRecipe extends Component {
  state = {
    error: undefined,
    modal: false,
  }

  toggle = () => {
    this.setState(() => ({ modal: !this.state.modal }))
  }

  handleAddRecipe = (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value.trim();
    const ingredients = e.target.elements.ingredients.value.split(',')

    const recipe = {
      title,
      ingredients,
    }

    const error = this.props.handleAddRecipe(recipe);
    this.setState(() => ({ error }))
    if(!error) {
      e.target.elements.title.value = "";
      e.target.elements.ingredients.value = "";
    }
  }

  render () {
    return (
      <div>
        <Button className="btn-big" color="danger" onClick={this.toggle}>Add</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>New Recipe</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleAddRecipe}>
              <FormGroup>
                <Label for="title">Name for Recipe</Label>
                <Input bsSize="lg" type="text" name="title" id="titleRecipe" placeholder="Name your recipe" />
              </FormGroup>
              <FormGroup>
                <Label for="ingredients">Ingredients</Label>
                <Input type="textarea" name="ingredients" id="ingredientsText" placeholder="Write all ingredients separate with commas (,)" />
              </FormGroup>
              <Button color="primary">Save</Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default AddRecipe