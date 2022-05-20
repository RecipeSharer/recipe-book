import React from 'react';
import useRecipes from '../hooks/useRecipes';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styles from './Views.css';
import useUser from '../hooks/useUser';
import Form from '../components/Form';

export default function EditRecipeView() {
  const { recipes, update, isLoading } = useRecipes();
  const params = useParams();
  const history = useHistory();
  const { user } = useUser();

  // if (!recipes && isLoading) return null;

  const filteredRecipe = (recipes || []).filter((recipe) => Number(params.id) === recipe.id);

  const recipe = filteredRecipe[0] || {};

  const isOwner = user.id === recipe.user_id;

  
  // const [title, setTitle] = useState(recipe.title);
  // const [description, setDescription] = useState(recipe.description);
  // const [ingredients, setIngredients] = useState(recipe.ingredients);
  
  if (!isOwner) {
    history.replace(`/recipes/detail/${params.id}`);
    return null;
  }
  // console.log('recipe', recipe);

  async function handleSubmit(e) {
    e.preventDefault();
    const editedRecipe = { title, description, ingredients };
    // console.log('editedRecipe', editedRecipe);

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
          />
      }
    </>
  );
}
