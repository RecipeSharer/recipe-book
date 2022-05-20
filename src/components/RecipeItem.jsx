import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function RecipeItem({ recipe }) {

  
  return (
    <Link to={`/recipes/detail/${recipe.id}`} >
      <h3>{recipe.title}</h3>
    </Link>
        
  )
}
