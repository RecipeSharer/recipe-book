import React from 'react';
import useRecipes from '../hooks/useRecipes';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useUser from '../hooks/useUser';
import Form from '../components/Form';

export default function EditRecipeView() {
  const { recipes, update, isLoading } = useRecipes();
  const params = useParams();
  const history = useHistory();
  const { user } = useUser();

  // guardrail clause - returns early if we havent fetched our recipes yet
  if (!recipes) return null;

  // gets our current recipe from all recipes
  const filteredRecipe = (recipes || []).filter((recipe) => Number(params.id) === recipe.id);

  // gets rid of [0]
  const recipe = filteredRecipe[0] || {};

  // checks to see if current recipe's id matches logged in user's id
  const isOwner = user.id === recipe.user_id;

  // if this isn't the recipes owner kick them to detail page
  if (!isOwner) {
    history.replace(`/recipes/detail/${params.id}`);
    return null;
  }

  // handle submit form function that takes in the edited recipe from our form
  async function handleSubmit(editedRecipe) {
    await update(Number(params.id), editedRecipe);
    history.replace('/recipes');
  }

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : <Form
          recipe={recipe}
          onSubmit={handleSubmit}
          label='Update'
          />
      }
    </>
  );
}
