import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { movie } from '../utils/types/movie'
import styles from './singleMoviePreview.module.css'

interface Props {
  movie: movie
}

const SingleMoviePreview: React.FC<Props> = ({ movie }) => {
  return (
    <Col className={`text-center mt-5 ${styles.zoom}`}>
      <Link to={`/movies/${movie.id}`} className="text-decoration-none">
        <img
          src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
          alt="BigCo Inc. logo"
        />
        <h6 className="text-light my-3 mx-3 " >
          {movie.title || movie.original_title}
        </h6>
      </Link>
    </Col>
  )
}

export default SingleMoviePreview
