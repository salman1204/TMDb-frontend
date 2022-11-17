import { useQuery } from '@tanstack/react-query'
import { nanoid } from 'nanoid'
import { Container } from 'react-bootstrap'
import { getCredits } from '../apis/credits'
import { QUERY_CREDITS } from '../utils/constants/queryKeys'
import { cast } from '../utils/types/cast'
import { crew } from '../utils/types/crew'
import CastItem from './CastItem'
import CrewItem from './CrewItem'

interface Props {
  movieId: string | undefined
}

const CastAndCrew: React.FC<Props> = ({ movieId }) => {
  const { isLoading, data } = useQuery(
    [QUERY_CREDITS, movieId],
    () => getCredits(movieId),
    { refetchOnWindowFocus: false }
  )

  return (
    <Container className="py-5">
      {!isLoading && (
        <div>
          <h2
            className={`mb-4 mb-md-3 d-flex flex-start text-uppercase`}
            style={{ color: '#f5c518', borderLeft: '6px solid #f5c518' }}
          >
            <span className="ms-3 ">
              <span>Cast</span>
            </span>
          </h2>

          <div className="d-flex justify-content-center flex-wrap py-2 mx-auto mb-5">
            {data?.cast.slice(0, 12).map((cast: cast) => {
              return <CastItem key={nanoid()} cast={cast} />
            })}
            {data?.cast.length === 0 && (
              <h4 className="text-center py-1 ">No cast available</h4>
            )}
          </div>

          <h2
            className={`mb-2 mb-md-3 d-flex flex-start text-uppercase`}
            style={{ color: '#f5c518', borderLeft: '6px solid #f5c518' }}
          >
            <span className="ms-3 ">
              <span>Crew</span>
            </span>
          </h2>

          <div className="d-flex justify-content-center flex-wrap py-3 ms-auto">
            {data?.crew.slice(0, 12).map((crew: crew) => {
              return <CrewItem key={nanoid()} crew={crew} />
            })}
             {data?.crew.length === 0 && (
              <h4 className="text-center py-1 ">No crew available</h4>
            )}
          </div>
        </div>
      )}
    </Container>
  )
}

export default CastAndCrew
