import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function RecipeItem({ recipe }) {

  
  return (
    <Link to={`/recipes/${recipe.id}`} >
      <h3>{recipe.title}</h3>
      {/* <p>Created at {new Date(recipe.created_at).toLocaleDateString()}</p>
      <p>{recipe.description}</p>
      <h4>Ingredients:</h4>
      
      {
        recipe.ingredients.map((ingredient) =>
          <li>{ingredient}</li>)
      } */}
    </Link>
        
  )
}
