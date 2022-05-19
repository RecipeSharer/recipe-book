import React from 'react';
import { useParams } from 'react-router-dom';
import useRecipes from '../hooks/useRecipes';
import useUser from '../hooks/useUser'

export default function DetailView() {
  const params = useParams();
  const { user } = useUser();
  console.log('user.id', user.id)

  const { recipes, isLoading } = useRecipes();
  let recipe;


  if (!isLoading) {
    recipe = recipes.filter((recipe) => Number(params.id) === recipe.id);
    console.log('recipe user_id', recipe[0].user_id);
  }
  

  return (
    <div>
      {isLoading
        ? <p>Loading...</p>
        : (
        <>
          <h3>{recipe[0].title}</h3>
            <p>
              Created at {new Date(recipe[0].created_at).toLocaleDateString()}
            </p>
          <p>{recipe[0].description}</p>
          <h4>Ingredients:</h4>
          {
            recipe[0].ingredients?.map((ingredient) =>
              <li key={ingredient}>{ingredient}</li>)
          }
          {recipe[0].user_id === user.id 
              ? <>
                <button>Edit Recipe</button>
                <button>Delete Recipe</button>
              </>
              : <button>Copy Recipe</button>
            // <button>Delete Recipe</button>
            
          }
        </>
        )
      }
    </div>
  )
};