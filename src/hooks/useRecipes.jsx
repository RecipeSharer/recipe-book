import { useContext, useEffect, useState } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import { getRecipes, addRecipe } from '../services/recipes';
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
    try{
      const result = await addRecipe(recipe);
      dispatch({ action: 'CREATE', payload: result });
      toast.success(`Your recipe, ${recipe.title}, has been added!`)

    } catch (err) {
      toast.error(err.message);
      throw err;
    }
  }
  

  return { recipes, isLoading, add };
}
