import { useQuery } from '@tanstack/react-query'
import { nanoid } from 'nanoid'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { getTopMoviesByGenre } from '../apis/movies'
import RecentlyVisitedMovies from '../components/RecentlyVisitedMovies/RecentlyVisitedMovies'
import SingleMoviePreview from '../components/SingleMoviePreview/SingleMoviePreview'
import { useStore } from '../store/genreStore'
import { useStore as recentlyVisitedUseStore } from '../store/recentlyVisitedMoviesStore'
import { QUERY_TOP_MOVIES_BY_GENRE } from '../utils/constants/queryKeys'
import { movie } from '../utils/types/movie'

const Genre = () => {
  const { genreId } = useParams()
  const { currentGenre } = useStore()
  const { recentlyVisitedMovies } = recentlyVisitedUseStore()

  const { isLoading, data } = useQuery(
    [QUERY_TOP_MOVIES_BY_GENRE, 'genreId'],
    () => getTopMoviesByGenre(genreId),
    { refetchOnMount: 'always', refetchOnWindowFocus: false }
  )

  const sortedMoviesByRating = data?.results
    ?.slice(0, 10)
    ?.sort(
      (a: { vote_average: number }, b: { vote_average: number }) =>
        b.vote_average - a.vote_average
    )

  return (
    <Container className="pt-5 ">
      <h2
        className={`mb-2 mb-md-3 d-flex flex-start`}
        style={{ color: '#f5c518', borderLeft: '6px solid #f5c518' }}
      >
        <span className="ms-3 ">
          <span>Popular {currentGenre} Movies</span>
        </span>
      </h2>

      <div className="mb-5 d-flex justify-content-center flex-wrap mx-auto row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5">
        {!isLoading &&
          sortedMoviesByRating?.map((movie: movie) => {
            return <SingleMoviePreview key={nanoid()} movie={movie} />
          })}
      </div>
      {recentlyVisitedMovies.length > 0 && <RecentlyVisitedMovies />}
    </Container>
  )
}

export default Genre
