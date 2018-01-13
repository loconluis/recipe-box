import React, { Component } from 'react';
import '../styles/App.css';
// Components
import RecipeList from './RecipeList';
import { 
  Container,
  Row,
  Col,
  Button
  } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Container>
            <Row>
              <Col className="header">
                <h1>Recipe Box</h1>
                <Button className="btn-big" color="danger" onClick={this.toggle}>Add</Button>
              </Col>
            </Row>
          </Container>
        </header>
        <RecipeList />
      </div>
    );
  }
}

export default App;
