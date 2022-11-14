import { useQuery } from '@tanstack/react-query'
import { nanoid } from 'nanoid'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { getTopMoviesByGenre } from '../apis/movies'
import RecentlyVisitedMovies from '../components/RecentlyVisitedMovies'
import SingleMoviePreview from '../components/SingleMoviePreview/SingleMoviePreview'
import { useStore } from '../store/genreStore'
import { QUERY_TOP_MOVIES_BY_GENRE } from '../utils/constants/queryKeys'
import { movie } from '../utils/types/movie'
import styles from '../components/MoviesBlockByGenre/moviesBlockByGenre.module.css'

const Genre = () => {
  const { genreId } = useParams()
  const { currentGenre } = useStore()

  const { isLoading, data, error, refetch } = useQuery(
    [QUERY_TOP_MOVIES_BY_GENRE, 'genreId'],
    () => getTopMoviesByGenre(genreId),
    { refetchOnMount: 'always', refetchOnWindowFocus: false }
  )

  return (
    <Container>
      <div className="text-light text-center"></div>
      <h1 className={`py-3 ${styles.strike}`} style={{ color: '#f5c518' }}>
        <span>Top 10 {currentGenre} Movies</span>
      </h1>
      <div className="d-flex justify-content-center flex-wrap mx-auto row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5">
        {!isLoading &&
          data?.results?.slice(0, 10)?.map((movie: movie) => {
            return <SingleMoviePreview key={nanoid()} movie={movie} />
          })}
      </div>
      <RecentlyVisitedMovies />
    </Container>
  )
}

export default Genre
