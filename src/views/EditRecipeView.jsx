import React from 'react';
import useRecipes from '../hooks/useRecipes';
// import useUser from '../hooks/useUser';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';


export default function EditRecipeView() {
  const { recipes, update, isLoading } = 
    useRecipes();
  const params = useParams();
  // const { user } = useUser();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState(null);
  const history = useHistory();

  let recipe;

  if (!isLoading) {
    recipe = recipes.filter((recipe) => Number(params.id) === recipe.id);
  }

  console.log('recipe', recipe);

  async function handleSubmit(e) {
    e.preventDefault();
    const editedRecipe = { title, description, ingredients };

    await update(editedRecipe);
    history.replace('/recipes');
  }

  return (
    <>
      {isLoading
        ? <p>Loading...</p>
        :
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setTitle(e.target.value)}
            placeholder="title"
            value={recipe[0].title}
          />
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            placeholder="description"
            value={recipe[0].description}
          />
          <input
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="ingredients"
            value={recipe[0].ingredients}
          />
          <button>Update Recipe</button>
        </form>
      }
      
    </>
  )
};
