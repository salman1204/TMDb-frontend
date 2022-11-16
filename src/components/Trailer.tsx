import { useQuery } from '@tanstack/react-query'
import { Container } from 'react-bootstrap'
import { getMovieTrailer } from '../apis/movies'
import { QUERY_MOVIE_TRAILER } from '../utils/constants/queryKeys'
import { trailer } from '../utils/types/trailer'
import YoutubeEmbed from './YoutubeEmbed/YoutubeEmbed'

interface Props {
  movieId: string | undefined
}

const Trailer: React.FC<Props> = ({ movieId }) => {
  const { isLoading, data } = useQuery(
    [QUERY_MOVIE_TRAILER, movieId],
    () => getMovieTrailer(movieId),
    { refetchOnWindowFocus: false }
  )

  const isTrailerExists = data?.results?.find((element: trailer) => {
    return element?.site === 'YouTube' && element?.type === 'Trailer'
  })

  return (
    <Container className="py-5">
      {!isLoading && (
        <div>
          <h2
            className={`mb-5 d-flex flex-start text-uppercase`}
            style={{ color: '#f5c518', borderLeft: '6px solid #f5c518' }}
          >
            <span className="ms-3 ">
              <span>Watch Trailer</span>
            </span>
          </h2>
          {isTrailerExists ? (
            <YoutubeEmbed embedId={isTrailerExists?.key} />
          ) : (
            <h4 className='text-center border border-warning py-3 text-danger'>Sorry !! No Trailer Available.</h4>
          )}
        </div>
      )}
    </Container>
  )
}

export default Trailer
