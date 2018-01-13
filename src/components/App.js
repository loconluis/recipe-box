import React, { Component } from 'react';
import '../styles/App.css';
// Components
import RecipeList from './RecipeList';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Recipe Box</h1>
        </header>
        <RecipeList />
      </div>
    );
  }
}

export default App;
