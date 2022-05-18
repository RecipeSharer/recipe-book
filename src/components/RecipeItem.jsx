import React from 'react'

export default function RecipeItem({ recipe }) {

  
  return (
    <div>
      <h3>{recipe.title}</h3>
      <p>Created at {new Date(recipe.created_at).toLocaleDateString()}</p>
      <p>{recipe.description}</p>
      <h4>Ingredients:</h4>
      
      {
        recipe.ingredients.map((ingredient) =>
          <li>{ingredient}</li>)
      }
    </div>
        
  )
}
