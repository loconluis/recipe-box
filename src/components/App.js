import React, { Component } from 'react';
import RecipeList from './RecipeList';
import { 
  Container,
  Row,
  Col,
} from 'reactstrap';
// styles
import '../styles/App.css';
// Components
import AddRecipe from './AddRecipe';
// seed data
import data from '../utils/data';

class App extends Component {

  state = {
    recipes: data || [],
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
    console.log(this.state.recipes);
    return (
      <div>
        <header>
          <Container>
            <Row>
              <Col className="header">
                <h1>Recipe Box</h1>
                <AddRecipe
                  handleAddRecipe={this.handleAddRecipe}
                />
              </Col>
            </Row>
          </Container>
        </header>
        <RecipeList
          recipes={this.state.recipes}
        />
      </div>
    );
  }
}

export default App;
