import React from 'react';
import useRecipes from '../hooks/useRecipes';

export default function ListView() {
  const { recipes, isLoading } = useRecipes();


  return (
    <div>
      <h2>List of Recipes</h2>
      <ul>
        {isLoading
          ? <p>Loading...</p>
          : (recipes.map((recipe) =>
          <li
            key={recipe.id}
          >{recipe.title}</li>))
        
      }
      </ul>
    </div>
  )
};
