import { useQuery } from '@tanstack/react-query'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getMoviesListByGenre } from '../../apis/movies'
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

  const handleShuffleMovies = (array: any[]) => {
    let currentIndex = array.length,
      randomIndex

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      ;[array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ]
    }
    return array.slice(0, 5)
  }

  let randomMovies

  if (!isLoading && data !== undefined) {
    randomMovies = handleShuffleMovies(data.results)
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
    </Row>
  )
}

export default MoviesBlockByGenre
