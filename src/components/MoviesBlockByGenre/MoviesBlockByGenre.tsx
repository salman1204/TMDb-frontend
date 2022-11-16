import { useQuery } from '@tanstack/react-query'
import { nanoid } from 'nanoid'
import { Button, Row } from 'react-bootstrap'
import { FaAngleRight } from 'react-icons/fa'
import { HiChevronDoubleRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { getMoviesListByGenre } from '../../apis/movies'
import { handleShuffleMovies } from '../../services/handleShuffleMovies'
import { useStore } from '../../store/genreStore'
import { QUERY_MOVIES_LIST } from '../../utils/constants/queryKeys'
import { genreProps } from '../../utils/types/genre'
import { movie } from '../../utils/types/movie'
import SingleMoviePreview from '../SingleMoviePreview/SingleMoviePreview'
import styles from './moviesBlockByGenre.module.css'
interface Props {
  genre: genreProps
}

const MoviesBlockByGenre: React.FC<Props> = ({ genre }) => {
  const { setCurrentGenre } = useStore()

  const { isLoading, data } = useQuery(
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
      <h2
        className={`mt-5 mb-2 mb-md-3 d-flex flex-start text-uppercase ${styles.genre__link} `}
        style={{ borderLeft: '6px solid #f5c518' }}
      >
        <span>
          <Link
            to={`/genre/${genre.id}`}
            onClick={() => setCurrentGenre(genre.name)}
            className={`d-flex align-items-center`}
          >
            {genre.name}
            <FaAngleRight className="ms-1" />
          </Link>
        </span>
      </h2>
      <div className="d-flex justify-content-center flex-wrap mb-2 mt-1 mx-auto">
        {randomMovies?.map((movie: movie) => {
          return <SingleMoviePreview key={nanoid()} movie={movie} />
        })}
      </div>
      <div className="d-flex justify-content-center justify-content-lg-end mt-5 mb-3">
        <Button size="sm" variant="outline-warning">
          <Link
            to={`/genre/${genre.id}`}
            className="text-decoration-none text-light"
            onClick={() => setCurrentGenre(genre.name)}
          >
            See More <HiChevronDoubleRight />
          </Link>
        </Button>
      </div>
    </Row>
  )
}

export default MoviesBlockByGenre
