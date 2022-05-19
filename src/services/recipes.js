import { client, parseData } from './client';

export async function getRecipes() {
  const request = await client.from('recipes').select();
  // .order('created_at', { ascending: false });

  return parseData(request);
}

export async function addRecipe(recipe) {
  const request = await client.from('recipes').insert(recipe).single();

  return parseData(request);
}

export async function deleteRecipe(id) {
  const request = await client.from('recipes').delete().match({ id });

  return parseData(request);
}

