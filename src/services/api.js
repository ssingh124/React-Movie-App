import { APP_ID, APP_KEY, BASE_URL } from '../config/api_config'

export const getRecipes = async recipeName => {
  const api_call = await fetch(
    `${BASE_URL}?q=${recipeName}&app_id=${APP_ID}&app_key=${APP_KEY}`
  )
  const data = await api_call.json()

  const recipes = data.hits

  console.log('recipes', recipes)
  return recipes
}

export const getRecipe = async uri => {
  const encodedUri = encodeURIComponent(uri)

  const api_call = await fetch(
    `${BASE_URL}?r=${encodedUri}&app_id=${APP_ID}&app_key=${APP_KEY}`
  )

  const data = await api_call.json()

  const recipe = data[0]

  return recipe
}
