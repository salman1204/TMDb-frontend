import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AiFillStar } from 'react-icons/ai'
import { BsGraphUp, BsPeopleFill } from 'react-icons/bs'
import { useLocation, useParams } from 'react-router-dom'
import { getMovieDetails } from '../apis/movies'
import { useStore } from '../store/recentlyVisitedMoviesStore'
import { QUERY_MOVIES_DETAILS } from '../utils/constants/queryKeys'
import CastAndCrew from './CastAndCrew'
import RecentlyVisitedMovies from './RecentlyVisitedMovies'
import RelatedMovies from './RelatedMovies'
import Trailer from './Trailer'

const MovieDetails = () => {
  const { movieId } = useParams()
  const { pathname } = useLocation()
  const { recentlyVisitedMovies } = useStore()

  const { isLoading, data, error } = useQuery(
    [QUERY_MOVIES_DETAILS, movieId],
    () => getMovieDetails(movieId),
    { refetchOnMount: 'always', refetchOnWindowFocus: false }
  )

  // console.log(data)
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 0)
  }, [pathname])

  return (
    <Container>
      {!isLoading && (
        <Row className="pt-5 mb-5">
          <Col lg={6} className="d-flex justify-content-center">
            <img
              src={`https://image.tmdb.org/t/p/w342/${data?.poster_path}`}
              alt="BigCo Inc. logo"
            />
          </Col>
          <Col>
            <div
              className="mx-auto mx-lg-0 text-light mt-5"
              style={{ width: '85%' }}
            >
              <h1 style={{ color: '#f5c518' }}>{data?.title}</h1>
              <div className="d-flex">
                <h5 className="me-2">
                  <AiFillStar color="#f5c518" />{' '}
                  {Number(data?.vote_average).toFixed(1)}{' '}
                  <small style={{ fontSize: '0.7rem' }}>
                    <BsPeopleFill color="#f5c518" /> {data?.vote_count || 0}
                  </small>
                </h5>
                <h5 className="mx-4">
                  <BsGraphUp color="#f5c518" /> {~~data?.popularity}
                </h5>
              </div>
              <p>
                <span style={{ color: '#f5c518' }}>Overview :</span>{' '}
                {data?.overview}
              </p>
              <h5>
                <a
                  href={`https://www.imdb.com/title/${data?.imdb_id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  IMDB
                </a>
              </h5>
            </div>
          </Col>
        </Row>
      )}
      <CastAndCrew movieId={movieId} />
      <Trailer movieId={movieId} />
      <RelatedMovies movieId={movieId} />
      {recentlyVisitedMovies.length > 0 && <RecentlyVisitedMovies />}
    </Container>
  )
}

export default MovieDetails
