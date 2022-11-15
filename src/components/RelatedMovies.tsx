import { useQuery } from '@tanstack/react-query'
import { nanoid } from 'nanoid'
import { Container } from 'react-bootstrap'
import { getRelatedMovies } from '../apis/movies'
import { handleShuffleMovies } from '../services/handleShuffleMovies'
import { QUERY_RELATED_MOVIES } from '../utils/constants/queryKeys'
import { movie } from '../utils/types/movie'
import SingleMoviePreview from './SingleMoviePreview/SingleMoviePreview'
interface Props {
  movieId: string | undefined
}

const RelatedMovies: React.FC<Props> = ({ movieId }) => {
  const { isLoading, data, error, refetch } = useQuery(
    [QUERY_RELATED_MOVIES, movieId],
    () => getRelatedMovies(movieId),
    { refetchOnMount: 'always', refetchOnWindowFocus: false }
  )

  let shuffleMovies

  if (!isLoading && data !== undefined) {
    shuffleMovies = handleShuffleMovies(data.results).slice(0, 5)
  }
  return (
    <Container className="py-5">
      <h2
        className={`mb-2 mb-md-3 d-flex flex-start text-uppercase`}
        style={{ color: '#f5c518', borderLeft: '6px solid #f5c518' }}
      >
        <span className="ms-3 ">
          <span>Related Movies</span>
        </span>
      </h2>
      <div className="d-flex justify-content-center flex-wrap py-2 mx-auto">
        {shuffleMovies?.map((movie: movie) => {
          return <SingleMoviePreview key={nanoid()} movie={movie} />
        })}
      </div>
    </Container>
  )
}

export default RelatedMovies
