import { useQuery } from '@tanstack/react-query'
import { getMoviesListByGenre } from '../apis/movies'
import { QUERY_MOVIES_LIST } from '../utils/constants/queryKeys'
import { genreProps } from '../utils/types/genre'
import { movie } from '../utils/types/movie'
import SingleMoviePreview from './SingleMoviePreview'

interface Props {
  genre: genreProps
}

const MoviesBlockByGenre: React.FC<Props> = ({ genre }) => {
  const { isLoading, data, error, refetch } = useQuery(
    [QUERY_MOVIES_LIST, genre.id],
    () => getMoviesListByGenre(genre.id),
    { refetchOnMount: 'always' }
  )
  // console.log(data, 'Movies by Genre')

  const handleShuffleMovies = (arr: any[]) =>
    [...arr].sort(() => Math.random() - 0.5)

  let randomMovies
  if (!isLoading && data !== undefined) {
    randomMovies = handleShuffleMovies(data.results).slice(0, 5)
  }
 
  return (
    <>
      <h1> {genre.name}</h1>
      {randomMovies?.map((movie: movie) => {
        return <SingleMoviePreview key={movie.id} movie={movie} />
      })}
    </>
  )
}

export default MoviesBlockByGenre
