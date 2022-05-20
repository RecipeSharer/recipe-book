import useRecipes from '../hooks/useRecipes';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Form from '../components/Form';

export default function AddRecipeView() {
  const { add } = useRecipes();
  const history = useHistory();

  async function handleSubmit(newRecipe) {
    await add(newRecipe);
    history.replace('/recipes');
  }

  return (
    <Form
      onSubmit={handleSubmit}
      label='Add'
      recipe={{}}
    />
  );
}
