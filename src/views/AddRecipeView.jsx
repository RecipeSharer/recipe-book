import useRecipes from '../hooks/useRecipes';
// import useUser from '../hooks/useUser';
import { useState } from 'react';

export default function AddRecipeView() {
  const { add } = useRecipes();
  // const { user } = useUser();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const newRecipe = { title, description, ingredients };

    await add(newRecipe);
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
  );
}
