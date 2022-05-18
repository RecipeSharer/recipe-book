import { useContext, useEffect, useState } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import { getRecipes } from '../services/recipes';
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
        console.log('results', results);
        dispatch({ action: 'RELOAD', payload: results });
        setIsLoading(false);

      } catch (error) {
        toast.error(err.message);
        throw err;
      }
    }
    getAndDispatchRecipes();
  }, [])
  




  return { recipes, isLoading };
}
