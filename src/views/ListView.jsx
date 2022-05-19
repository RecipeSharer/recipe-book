import React from 'react';
import useRecipes from '../hooks/useRecipes';
import { Link } from 'react-router-dom';
import RecipeItem from '../components/RecipeItem';

export default function ListView() {
  const { recipes, isLoading } = useRecipes();


  return (
    <div>
      <h2>List of Recipes</h2>

      <Link to='/recipes/add'>
        <button>Add a new recipe</button>
      </Link>


      <ul>
        {isLoading
          ? <p>Loading...</p>
          : (recipes.map((recipe) =>
            <RecipeItem
              key={recipe.id}
              recipe={recipe}
            />))
        
      }
      </ul>
    </div>
  )
};
