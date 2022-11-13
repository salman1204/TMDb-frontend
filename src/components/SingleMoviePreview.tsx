import { Col } from 'react-bootstrap'
import { movie } from '../utils/types/movie'

interface Props {
  movie: movie
}

const SingleMoviePreview: React.FC<Props> = ({ movie }) => {
  return (
    <Col className="text-center mt-5">
      <img
        src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
        alt="BigCo Inc. logo"
      />
      <h6 className="text-light my-3 mx-2">
        {movie.title || movie.original_title}
      </h6>
    </Col>
  )
}

export default SingleMoviePreview
