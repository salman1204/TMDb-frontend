import { Col } from 'react-bootstrap'
import { cast } from '../utils/types/cast'

interface Props {
  cast: cast
}
const CastItem: React.FC<Props> = ({ cast }) => {
  console.log(cast)
  return (
    <Col className='text-center my-3 text-light text-center' xs={6} md ={4} lg={2}>
      <img
        src={
          cast?.profile_path !== null
            ? `https://image.tmdb.org/t/p/w154/${cast?.profile_path}`
            : `https://i.ibb.co/0fFVykj/depositphotos-137014128-stock-illustration-user-profile-icon.webp`
        }
        alt="BigCo Inc. logo"
        className="img-fluid rounded-circle mb-3"
        style={{ height: '7rem', width: '7.5rem' }}
      />
      <h6>{cast?.name}</h6>
    </Col>
  )
}

export default CastItem
