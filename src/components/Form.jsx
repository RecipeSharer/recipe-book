import React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import styles from './Form.css';

export default function Form({ recipe, onSubmit, label }) {
  const [title, setTitle] = useState(recipe.title || '');
  const [description, setDescription] = useState(recipe.description || '');
  const [ingredients, setIngredients] = useState(recipe.ingredients || '');
  const [imgUrl, setImgUrl] = useState(recipe.img_url || '');

  const newRecipe = { title, description, ingredients, img_url: imgUrl };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await onSubmit(newRecipe);
    } catch (error) {
      toast.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
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
      <input
        value={imgUrl}
        onChange={(e) => setImgUrl(e.target.value)}
        placeholder="image url"
      />
      <button>{`${label}`} Recipe</button>
    </form>
  );
}
