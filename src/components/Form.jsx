import React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import styles from './Form.css';

export default function Form({ recipe, onSubmit, label }) {
  const [title, setTitle] = useState(recipe.title || '');
  const [description, setDescription] = useState(recipe.description || '');
  const [ingredients, setIngredients] = useState(recipe.ingredients || '');

  const newRecipe = { title, description, ingredients };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await onSubmit(newRecipe)
    } catch (error) {
      toast.error(error);
    }
  }



  return (
    <form
      onSubmit={handleSubmit}
      className={styles.form}
    >
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
          <button>{`${label}`} Recipe</button>
        </form>
  )
};
