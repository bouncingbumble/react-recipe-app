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
      nextRecipeId: 3,
      showForm: false
    }

    this.handleSave = this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
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

  onDelete(id){
    const recipes = this.state.recipes.filter(r => r.id !== id);
    this.setState({recipes});
  }

  render() {
    const {showForm} = this.state;
    return (
      <div className="App">
        <Navbar 
          onNewRecipe={() => this.setState({showForm: true})}
          links= {['New Recipe', 'Home', 'About']}
          appName={'RecipeApp'}
        />
        { showForm ? <RecipeForm onSave={this.handleSave} onClose={() => this.setState({showForm: false}) } /> : null }
        <RecipeList recipes={this.state.recipes} onDelete={this.onDelete}/>
      </div>
    );
  }
}

export default RecipeApp;
