import React, { Component } from 'react';
import Recipe from './Recipe';
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Recipe 
          title="pasta" 
          ingredients={['four', 'water']}
          instructions="Mix ingredents"
          img="spaghetti.jpg"/>
      </div>
    );
  }
}

export default RecipeApp;
