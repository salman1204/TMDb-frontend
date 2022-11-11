import axios from 'axios'

export const getGenresList = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=cd890f94a756b1518a2a17617a5b430e`
    )
    return response.data
  } catch (error) {
    // console.log(error)
  }
}
