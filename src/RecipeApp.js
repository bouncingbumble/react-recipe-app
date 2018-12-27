import React, { Component } from 'react';
import Recipe from './Recipe';
import RecipeList from './RecipeList';
import Navbar from './Navbar';
import './RecipeApp.css';

const recipes = [
  {
    title: 'Pasta',
    img: 'spaghetti.jpg',
    instructions: 'cook the spaghetti',
    ingredients: ['paster', 'water', 'sauce']
  },
  {
    title: 'Pasta',
    img: 'spaghetti.jpg',
    instructions: 'cook the spaghetti',
    ingredients: ['paster', 'water', 'sauce']
  },
  {
    title: 'Pasta',
    img: 'spaghetti.jpg',
    instructions: 'cook the spaghetti',
    ingredients: ['paster', 'water', 'sauce']
  }
]

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Navbar 
          links= {['1 link', '2 link', '3 link']}
          appName={'RecipeApp'}
        />
        <RecipeList 
          recipes={recipes}
        />
      </div>
    );
  }
}

export default RecipeApp;
