import { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { AiFillStar } from 'react-icons/ai'
import { BsDashLg, BsGraphUp, BsPlusLg } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useStore as recentlyVisitedUseStore } from '../../store/recentlyVisitedMoviesStore'
import { useStore } from '../../store/watchlistStore'
import { movie } from '../../utils/types/movie'
import styles from './singleMoviePreview.module.css'

interface Props {
  movie: movie
}

const SingleMoviePreview: React.FC<Props> = ({ movie }) => {
  const [isMovieInWatchlist, setIsMovieInWatchlist] = useState(false)
  const { watchlist, addToWatchlist, removeFromWatchlist } = useStore()
  const {
    recentlyVisitedMovies,
    addToList,
    removeFromRecentlyVisitedList,
    removeLastRecentlyVisitedList,
  } = recentlyVisitedUseStore()

  useEffect(() => {
    const checkMovieExists = watchlist.some(
      (watchlist) => watchlist.id === movie.id
    )
    setIsMovieInWatchlist(checkMovieExists)
  }, [movie.id, watchlist])

  const handleRecntleyVisitedMovies = (movie: movie) => {
    const checkMovieExists = recentlyVisitedMovies.some(
      (recentlyVisitedMovie: { id: number }) =>
        recentlyVisitedMovie.id === movie.id
    )
    if (checkMovieExists) {
      removeFromRecentlyVisitedList(movie.id)
      addToList(movie)
      return 0
    }

    if (recentlyVisitedMovies.length >= 5) {
      removeLastRecentlyVisitedList()
      addToList(movie)
    } else {
      addToList(movie)
    }
  }

  const handleWatchList = (movie: movie) => {
    const checkMovieExists = watchlist.some(
      (watchlist) => watchlist.id === movie.id
    )
    if (!checkMovieExists) {
      addToWatchlist(movie)
    } else {
      return 0
    }
  }

  return (
    <Col
      className={`text-center mt-5 text-light d-flex flex-column justify-content-between ${styles.zoom}`}
    >
      <Link
        to={`/movies/${movie.id}`}
        className="text-decoration-none"
        onClick={() => handleRecntleyVisitedMovies(movie)}
      >
        <img
          src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
          alt="BigCo Inc. logo"
        />
        <h6 className="text-light my-3 mx-3 ">
          {movie.title || movie.original_title}
        </h6>
      </Link>
      <Row>
        <Col className="d-flex justify-content-center">
          <h6 className="mx-2">
            <AiFillStar color="#f5c518" />{' '}
            {Number(movie?.vote_average).toFixed(1)}
          </h6>
          <h6 className="mx-2">
            <BsGraphUp color="#f5c518" /> {~~movie?.popularity}
          </h6>
        </Col>
      </Row>
      <Row className="mx-1 mx-md-4 mt-3">
        <Col className="d-flex justify-content-center">
          {isMovieInWatchlist ? (
            <Button
              variant="warning"
              onClick={() => removeFromWatchlist(movie.id)}
              className="px-3 px-md-4"
            >
              <BsDashLg color="#ff4d4d" /> Watchlist
            </Button>
          ) : (
            <Button
              variant="warning"
              onClick={() => handleWatchList(movie)}
              className="px-3 px-md-4"
            >
              <BsPlusLg color="#39ac39" /> Watchlist
            </Button>
          )}
        </Col>
      </Row>
    </Col>
  )
}

export default SingleMoviePreview
