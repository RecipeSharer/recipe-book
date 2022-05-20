import React from 'react';
import { useState } from 'react';
// import styles from '../Views.css';


export default function Form({ recipe, onSubmit }) {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const [ingredients, setIngredients] = useState(recipe.ingredients);



  return (
    <form
      onSubmit={onSubmit}
      // className={styles.form}
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
          <button>Update Recipe</button>
        </form>
  )
};
