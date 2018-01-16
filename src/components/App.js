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

  handleDeleteRecipe = (recipeToRemove) => {
    this.setState((prevState) => ({
      recipes: prevState.recipes.filter(recipe => recipeToRemove !== recipe.title)
    }))
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
                <AddRecipe
                  handleAddRecipe={this.handleAddRecipe}
                />
              </Col>
            </Row>
          </Container>
        </header>
        <RecipeList
          recipes={this.state.recipes}
          handleDeleteRecipe={this.handleDeleteRecipe}
        />
        <footer>
          <Container>
            <Row>
              <Col>
                <p className="text-center"><a href="https://github.com/loconluis/recipe-box" target="_blank" rel="noopener noreferrer">src</a> <i className="fas fa-code"></i> with <i className="fas fa-heart"></i> and <a href="www.reactjs.org" target="_blank" rel="noopener noreferrer"><i className="fab fa-react"></i></a> by <a href="www.twitter.com/LoconLuis" target="_blank" rel="noopener noreferrer" ><i className="fab fa-twitter"></i> @LoconLuis</a></p>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    );
  }
}

export default App;
