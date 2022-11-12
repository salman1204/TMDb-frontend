import axios from 'axios'

export const getMoviesListByGenre = async (genre: number) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=cd890f94a756b1518a2a17617a5b430e&with_genres=${genre}`
    )
    return response.data
  } catch (error) {
    // console.log(error)
  }
}
