import React, { Component } from 'react';
import '../styles/App.css';
// Components
import RecipeList from './RecipeList';
import { 
  Container,
  Row,
  Col,
} from 'reactstrap';
import AddRecipe from './AddRecipe';

class App extends Component {

  state = {
    recipes: [],
  }

  handleAddRecipe = (recipe) => {
    if(!recipe) {
      return 'Not valid values';
    }

    this.setState(prevState => ({ recipes: prevState.recipes.concat(recipe) }));
  }

  componentDidMount () {
    try{
      const json = localStorage.getItem('recipes');
      const recipes = JSON.parse(json);

      if(recipes) {
        this.setState(() => ({ recipes }))
      }
    } catch (e) {
      // Do nothig at all
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if(prevState.recipes.length !== this.state.recipes.length) {
      const json = JSON.stringify(this.state.recipes);
      localStorage.setItem('recipes', json);
    }
  }
  
  

  render() {
    return (
      <div>
        <header>
          <Container>
            <Row>
              <Col className="header">
                <h1>Recipe Box</h1>
                <AddRecipe />
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
