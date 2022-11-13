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
      `https://api.themoviedb.org/3/movie/popular?api_key=cd890f94a756b1518a2a17617a5b430e&language=en-US&page=1&with_genres=${genreId}`
    )
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const getMovieDetails = async (movieId: string | undefined) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=cd890f94a756b1518a2a17617a5b430e&language=en-US&append_to_response=credits`
    )
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const getRelatedMovies = async (movieId: string | undefined) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=cd890f94a756b1518a2a17617a5b430e&language=en-US&append_to_response=similar`
    )
    return response.data.similar
  } catch (error) {
    console.log(error)
  }
}
