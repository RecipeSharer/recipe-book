import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useRecipes from '../hooks/useRecipes';
import useUser from '../hooks/useUser'

export default function DetailView() {
  const params = useParams();
  const history = useHistory();
  const { user } = useUser();
  const { recipes, isLoading, deleteRec } = useRecipes();
  let recipe;

  if (!isLoading) {
    recipe = recipes.filter((recipe) => Number(params.id) === recipe.id);
  }
  
  async function handleDelete() {
    await deleteRec(Number(params.id));

    history.replace('/recipes');
  }

  function handleEdit() {
    history.replace(`/recipes/edit/${params.id}`);
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
          <p>{recipe[0].ingredients}</p>
          {recipe[0].user_id === user.id 
              ? <>
                <button onClick={handleEdit}>Edit Recipe</button>
                <button onClick={handleDelete}>Delete Recipe</button>
              </>
              : <button>Copy Recipe</button>
          }
        </>
        )
      }
    </div>
  )
};