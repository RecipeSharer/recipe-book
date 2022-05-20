import React from 'react';
import useRecipes from '../hooks/useRecipes';
import { Link } from 'react-router-dom';
import RecipeItem from '../components/RecipeItem';
import styles from './ListView.css';

export default function ListView() {
  const { recipes, isLoading } = useRecipes();


  return (
    <>
      <div className={styles.list}>
        {isLoading
          ? <p>Loading...</p>
          : (recipes.map((recipe) =>
            <RecipeItem
              key={recipe.id}
              recipe={recipe}
            />))
      }
      </div>
    </>
  )
};
