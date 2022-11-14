import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { movie } from '../../utils/types/movie'
import styles from './singleMoviePreview.module.css'

interface Props {
  movie: movie
}

const SingleMoviePreview: React.FC<Props> = ({ movie }) => {
  const handleRecntleyVisitedMovies = () => {
    if (localStorage.hasOwnProperty('movies')) {
      let movies = JSON.parse(localStorage.getItem('movies') || '[]')
      let isMovieExists = movies.findIndex(
        (item: movie) => item.id === movie.id
      )
      if (isMovieExists >= 0) {
        movies.splice(isMovieExists, 1)
        movies.unshift(movie)
        localStorage.setItem('movies', JSON.stringify([...movies]))
        return 0
      }
      if (movies.length >= 5) {
        movies.pop()
        movies.unshift(movie)
        localStorage.setItem('movies', JSON.stringify([...movies]))
      } else {
        movies.unshift(movie)
        localStorage.setItem('movies', JSON.stringify([...movies]))
      }
    } else {
      let movies: any[] = []
      movies.unshift(movie)
      localStorage.setItem('movies', JSON.stringify([...movies]))
    }
  }
  return (
    <Col className={`text-center mt-5 ${styles.zoom}`}>
      <Link
        to={`/movies/${movie.id}`}
        className="text-decoration-none"
        onClick={() => handleRecntleyVisitedMovies()}
      >
        <img
          src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
          alt="BigCo Inc. logo"
        />
        <h6 className="text-light my-3 mx-3 ">
          {movie.title || movie.original_title}
        </h6>
      </Link>
    </Col>
  )
}

export default SingleMoviePreview
