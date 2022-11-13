import axios from 'axios'

export const getMoviesListByGenre = async (genreId: number) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=cd890f94a756b1518a2a17617a5b430e&language=en-US&with_genres=${genreId}`
    )
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const getTopMoviesByGenre = async (genreId: string | undefined) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=cd890f94a756b1518a2a17617a5b430e&language=en-US&page=1&with_genres=${genreId}`
    )
    return response.data
  } catch (error) {
    console.log(error)
  }
}
