import React from 'react';
import {
  createContext,
  // useContext,
  useReducer
} from 'react';


export const RecipesContext = createContext();

// reducer function
function recipesReducer(recipes, { action, payload }) {
  switch (action) {
    case 'CREATE':
      return [payload, ...recipes];
    case 'UPDATE':
      return recipes.map((recipe) => (recipe.id === payload.id ? payload : recipe));
    case 'DELETE':
      return recipes.filters((recipe) => recipe.id !== payload.id);
    case 'COPY':
      // will spread in old recipe and overwrite with new user id?
      return; 
    case 'RELOAD':
      console.log('payload', payload);
      return payload;
    default:
      throw Error(`Unknown action: ${action}`);
  }
}

export default function RecipesProvider( { children }) {
  const [recipes, dispatch] = useReducer(recipesReducer);



  return (
    <RecipesContext.Provider
      value={{
        recipes,
        dispatch
      }}
    >
      {children}
    </RecipesContext.Provider>
  )
}