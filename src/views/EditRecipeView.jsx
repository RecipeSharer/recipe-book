import React from 'react';
import useRecipes from '../hooks/useRecipes';
// import useUser from '../hooks/useUser';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function EditRecipeView() {
  // const { add } = useRecipes();
  // const { user } = useUser();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState(null);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    const editedRecipe = { title, description, ingredients };

    // await add(editedRecipe);
    history.replace('/recipes');
  }

  return (
        <>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setTitle(e.target.value)} placeholder="title" />
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          placeholder="description"
        />
        <input
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="ingredients"
        />
        <button onClick={add}>Add Recipe</button>
      </form>
    </>
  )
};
