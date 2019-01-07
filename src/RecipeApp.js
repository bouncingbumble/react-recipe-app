import React, { Component } from 'react';
import RecipeList from './RecipeList';
import Navbar from './Navbar';
import './RecipeApp.css'; 
import RecipeForm from './RecipeForm';

class RecipeApp extends Component {
  constructor(props){
    super(props);

    this.state = {
      recipes:[
        {
          id: 0,
          title: 'Pasta',
          img: 'spaghetti.jpg',
          instructions: 'cook the spaghetti',
          ingredients: ['paster', 'water', 'sauce']
        },
        {
          id: 1,
          title: 'Pasta',
          img: 'spaghetti.jpg',
          instructions: 'cook the spaghetti',
          ingredients: ['paster', 'water', 'sauce']
        },
        {
          id: 2,
          title: 'Pasta',
          img: 'spaghetti.jpg',
          instructions: 'cook the spaghetti',
          ingredients: ['paster', 'water', 'sauce']
        }
      ],
      nextRecipeId: 3
    }

    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(recipe){
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeId}
      return {
        nextRecipeId: prevState.nextRecipeId,
        recipes: [...this.state.recipes, newRecipe]
      }
    })
  }


  render() {
    return (
      <div className="App">
        <Navbar 
          links= {['1 link', '2 link', '3 link']}
          appName={'RecipeApp'}
        />
        <RecipeForm onSave={this.handleSave} />
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default RecipeApp;
