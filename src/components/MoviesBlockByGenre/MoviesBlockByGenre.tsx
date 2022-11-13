import { useQuery } from '@tanstack/react-query'
import { Button, Row } from 'react-bootstrap'
import { HiChevronDoubleRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { getMoviesListByGenre } from '../../apis/movies'
import { handleShuffleMovies } from '../../services/handleShuffleMovies'
import { QUERY_MOVIES_LIST } from '../../utils/constants/queryKeys'
import { genreProps } from '../../utils/types/genre'
import { movie } from '../../utils/types/movie'
import SingleMoviePreview from '../SingleMoviePreview'
import styles from './moviesBlockByGenre.module.css'
interface Props {
  genre: genreProps
}

const MoviesBlockByGenre: React.FC<Props> = ({ genre }) => {
  const { isLoading, data, error, refetch } = useQuery(
    [QUERY_MOVIES_LIST, genre.id],
    () => getMoviesListByGenre(genre.id),
    { refetchOnMount: 'always', refetchOnWindowFocus: false }
  )
  // console.log(data, 'Movies by Genre')

  let randomMovies

  if (!isLoading && data !== undefined) {
    randomMovies = handleShuffleMovies(data.results).slice(0, 5)
  }

  return (
    <Row className="mx-auto">
      <h1 className={`my-3 ${styles.strike}`} style={{ color: '#f5c518' }}>
        <span>
          <Link to={`/genre/${genre.id}`}>{genre.name}</Link>
        </span>
      </h1>
      <div className="d-flex justify-content-center flex-wrap my-2 mx-auto">
        {randomMovies?.map((movie: movie) => {
          return <SingleMoviePreview key={movie.id} movie={movie} />
        })}
      </div>
      <div className="d-flex justify-content-center justify-content-lg-end mt-3 ">
        <Button size="sm" variant="warning">
          <Link
            to={`/genre/${genre.id}`}
            className="text-decoration-none text-dark"
          >
            See Popular {genre.name} Movies <HiChevronDoubleRight />{' '}
          </Link>
        </Button>
      </div>
    </Row>
  )
}

export default MoviesBlockByGenre
