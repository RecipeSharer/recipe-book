import { client, parseData } from './client';

export async function getRecipes() {
  const request = await client
    .from('recipes')
    .select();
    // .order('created_at', { ascending: false });
  
  console.log('request', request);
  return parseData(request);
}

