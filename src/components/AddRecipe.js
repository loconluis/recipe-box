import React, { Component } from 'react';
import { Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
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
    const recipe = {
      title: e.target.elements.title.value.trim(),
    }
  }

  render () {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>Add</Button>
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
              <Button>Enviar</Button>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Save</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default AddRecipe