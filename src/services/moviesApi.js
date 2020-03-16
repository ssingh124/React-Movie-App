// import { APP_ID, APP_KEY, BASE_URL } from '../config/api_config'

export const getRecipes = async recipeName => {
  const api_call = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=aae2ed335accddfcfa559f3bff2e4895`
  )
 
  const data = await api_call.json()

  

  console.log('Data', data)
  return data
}

// export const getRecipe = async uri => {
//   const encodedUri = encodeURIComponent(uri)

//   const api_call = await fetch(
//     `${BASE_URL}?r=${encodedUri}&app_id=${APP_ID}&app_key=${APP_KEY}`
//   )

//   const data = await api_call.json()

//   const recipe = data[0]

//   return recipe
// }
