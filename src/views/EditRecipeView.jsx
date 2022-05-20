import React from 'react';
import useRecipes from '../hooks/useRecipes';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';


export default function EditRecipeView() {
  const { recipes, update, isLoading } = useRecipes();
  const params = useParams();
  const history = useHistory();

  if (!recipes) return null;

 const recipe = recipes.filter((recipe) => Number(params.id) === recipe.id);


  const [title, setTitle] = useState(recipe[0].title);
  const [description, setDescription] = useState(recipe[0].description);
  const [ingredients, setIngredients] = useState(recipe[0].ingredients);

  console.log('recipe', recipe);

  async function handleSubmit(e) {
    e.preventDefault();
    const editedRecipe = { title, description, ingredients };
    console.log('editedRecipe', editedRecipe)

    await update(Number(params.id), editedRecipe);
    history.replace('/recipes');
  }

  return (
    <>
      {isLoading
        ? <p>Loading...</p>
        :
        <form onSubmit={handleSubmit}>
          <input
           value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="title"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="description"
            
          />
          <input
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="ingredients"
            
          />
          <button>Update Recipe</button>
        </form>
      }
      
    </>
  )
};
