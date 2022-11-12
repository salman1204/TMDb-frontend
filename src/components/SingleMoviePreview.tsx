import { movie } from '../utils/types/movie'

interface Props {
  movie: movie
}

const SingleMoviePreview: React.FC<Props> = ({ movie }) => {
  return (
    <div>
      <h3>{movie.original_title}</h3>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt="BigCo Inc. logo"
      />
    </div>
  )
}

export default SingleMoviePreview
