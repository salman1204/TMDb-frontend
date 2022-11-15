import { nanoid } from 'nanoid'
import { Row } from 'react-bootstrap'
import { useStore } from '../../store/recentlyVisitedMoviesStore'
import { movie } from '../../utils/types/movie'
import SingleMoviePreview from '../SingleMoviePreview/SingleMoviePreview'
import styles from './recentlyVisitedMovies.module.css'

const RecentlyVisitedMovies = () => {
  const { recentlyVisitedMovies } = useStore()

  return (
    <Row className="mx-auto">
      <h2
        className={`my-3 text-uppercase ${styles.strike}`}
        style={{ color: '#f5c518' }}
      >
        <span>Recently viewed</span>
      </h2>
      <div className="d-flex justify-content-start flex-wrap my-2 mb-5 mx-auto">
        {recentlyVisitedMovies?.map((movie: movie) => {
          return <SingleMoviePreview key={nanoid()} movie={movie} />
        })}
      </div>
    </Row>
  )
}

export default RecentlyVisitedMovies
