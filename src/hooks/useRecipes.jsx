import { useContext, useEffect, useState } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import { getRecipes, addRecipe, deleteRecipe, updateRecipe } from '../services/recipes';
import toast from 'react-hot-toast';

export default function useRecipes() {
  const [isLoading, setIsLoading] = useState(true);


  // context bucket
  const context = useContext(RecipesContext);

  // guardrail claus
  if (context === undefined) {
    throw new Error('useRecipes must be used within a RecipesContext')
  }

  // destructure context
  const { recipes, dispatch } = context;

  // fetch recipes on load
  useEffect(() => {
    async function getAndDispatchRecipes() {
      try {
        setIsLoading(true);
        const results = await getRecipes();
        dispatch({ action: 'RELOAD', payload: results });
        setIsLoading(false);

      } catch (err) {
        toast.error(err.message);
        throw err;
      }
    }
    getAndDispatchRecipes();
  }, [])

  async function add(recipe) {
    try {
      const result = await addRecipe(recipe);
      dispatch({ action: 'CREATE', payload: result });
      toast.success(`Your recipe, ${recipe.title}, has been added!`)

    } catch (err) {
      toast.error(err.message);
      throw err;
    }
  }

  async function deleteRec(id) {
    try {
      await deleteRecipe(id);
      dispatch({ action: 'DELETE', payload: id, });
      toast.success('You have deleted your recipe')
    } catch (err) {
      toast.error(err.message);
      throw err;
    }
  }

  async function update(id, recipe) {
    try {
      await updateRecipe(id, recipe);
      dispatch({ action: 'UPDATE', payload: { id, recipe } })
      toast.success(`You have updated the recipe ${recipe.title}`)
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  }
  
  console.log('recipes', recipes);
  return { recipes, isLoading, add, deleteRec, update };
}
