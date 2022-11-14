import { nanoid } from 'nanoid'
import { Row } from 'react-bootstrap'
import { movie } from '../utils/types/movie'
import styles from './MoviesBlockByGenre/moviesBlockByGenre.module.css'
import SingleMoviePreview from './SingleMoviePreview/SingleMoviePreview'

const RecentlyVisitedMovies = () => {
  let movies = JSON.parse(localStorage.getItem('movies') || '[]')
  return (
    <Row className="mx-auto">
      <h1 className={`my-3 ${styles.strike}`} style={{ color: '#f5c518' }}>
        <span>Recently Visited Movies</span>
      </h1>
      <div className="d-flex justify-content-start flex-wrap my-2 mx-auto">
        {movies?.map((movie: movie) => {
          return <SingleMoviePreview key={nanoid()} movie={movie} />
        })}
      </div>
    </Row>
  )
}

export default RecentlyVisitedMovies