import { useQuery } from '@tanstack/react-query'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { getMovieDetails } from '../apis/movies'
import { QUERY_MOVIES_DETAILS } from '../utils/constants/queryKeys'
import RelatedMovies from './RelatedMovies'

const MovieDetails = () => {
  const { movieId } = useParams()
  const { isLoading, data, error, refetch } = useQuery(
    [QUERY_MOVIES_DETAILS, movieId],
    () => getMovieDetails(movieId),
    {}
  )

  // console.log(data)
  return (
    <Container>
      {!isLoading && (
        <Row className="pt-5">
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
              <h1>Rating: {data?.vote_average}</h1>
              <p>Overview: {data?.overview}</p>
              <h1>
                IMDB Link{' '}
                <a href={`https://www.imdb.com/title/${data?.imdb_id}`}>
                  Go IMDB
                </a>
              </h1>
            </div>
          </Col>
        </Row>
      )}
      <RelatedMovies movieId={movieId} />
    </Container>
  )
}

export default MovieDetails
