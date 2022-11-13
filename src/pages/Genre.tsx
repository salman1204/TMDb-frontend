import { useQuery } from '@tanstack/react-query'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { getTopMoviesByGenre } from '../apis/movies'
import SingleMoviePreview from '../components/SingleMoviePreview'
import { QUERY_TOP_MOVIES_BY_GENRE } from '../utils/constants/queryKeys'
import { movie } from '../utils/types/movie'

const Genre = () => {
  const { genreId } = useParams()
  const { isLoading, data, error, refetch } = useQuery(
    [QUERY_TOP_MOVIES_BY_GENRE, 'genreId'],
    () => getTopMoviesByGenre(genreId),
    {}
  )

  return (
    <Container>
      <div className="text-light text-center"></div>
      <div className="d-flex justify-content-center flex-wrap mx-auto row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5">
        {!isLoading &&
          data?.results?.slice(0, 10)?.map((movie: movie) => {
            return <SingleMoviePreview key={movie.id} movie={movie} />
          })}
      </div>
      <div>Recently Viewed Movies</div>
    </Container>
  )
}

export default Genre
