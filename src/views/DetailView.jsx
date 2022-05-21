import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useRecipes from '../hooks/useRecipes';
import useUser from '../hooks/useUser';
import styles from './DetailView.css';

export default function DetailView() {
  const params = useParams();
  const history = useHistory();
  const { user } = useUser();
  const { recipes, isLoading, deleteRec, add } = useRecipes();
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

  async function handleCopy() {
    const copy = { ...recipe[0], id: undefined, user_id: undefined };

    const copiedRecipe = await add(copy);

    console.log(copiedRecipe);

    history.replace(`/recipes/edit/${copiedRecipe.id}`);
  }

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.detail}>
          <div className={styles.info}>
            <span>
              <img
                src={recipe[0].img_url}
                alt={`Image of ${recipe[0].title}`}
                className={styles.image}
              />
            </span>
            <span className={styles.text}>
              <h3>{recipe[0].title}</h3>
              <p>
                Created at {new Date(recipe[0].created_at).toLocaleDateString()}
              </p>
              <p>{recipe[0].description}</p>
              <p>{recipe[0].ingredients}</p>
              {recipe[0].user_id === user.id ? (
                <>
                  <button onClick={handleEdit}>Edit Recipe</button>
                  <button onClick={handleDelete}>Delete Recipe</button>
                </>
              ) : (
                <button onClick={handleCopy}>Copy Recipe</button>
              )}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
