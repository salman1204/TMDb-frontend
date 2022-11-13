import { useQuery } from '@tanstack/react-query'
import { Container } from 'react-bootstrap'
import { getRelatedMovies } from '../apis/movies'
import { handleShuffleMovies } from '../services/handleShuffleMovies'
import { QUERY_RELATED_MOVIES } from '../utils/constants/queryKeys'
import { movie } from '../utils/types/movie'
import styles from './MoviesBlockByGenre/moviesBlockByGenre.module.css'
import SingleMoviePreview from './SingleMoviePreview'

interface Props {
  movieId: string | undefined
}

const RelatedMovies: React.FC<Props> = ({ movieId }) => {
  const { isLoading, data, error, refetch } = useQuery(
    [QUERY_RELATED_MOVIES, movieId],
    () => getRelatedMovies(movieId),
    { refetchOnMount: 'always', refetchOnWindowFocus: false }
  )

  //   console.log(data)

  let shuffleMovies

  if (!isLoading && data !== undefined) {
    shuffleMovies = handleShuffleMovies(data.results).slice(0, 6)
  }
  return (
    <Container className="py-5">
      <h1 className={`my-3 ${styles.strike}`} style={{ color: '#f5c518' }}>
        <span>Related Movies</span>
      </h1>
      <div className="d-flex justify-content-center flex-wrap py-2 mx-auto">
        {shuffleMovies?.map((movie: movie) => {
          return <SingleMoviePreview key={movie.id} movie={movie} />
        })}
      </div>
    </Container>
  )
}

export default RelatedMovies
