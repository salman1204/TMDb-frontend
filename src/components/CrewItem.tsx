import { Col } from 'react-bootstrap'
import { crew } from '../utils/types/crew'

interface Props {
  crew: crew
}
const CrewItem: React.FC<Props> = ({ crew }) => {
  return (
    <Col
      className="text-center my-3 text-light text-center"
      xs={6}
      md={4}
      lg={2}
    >
      <img
        src={
          crew?.profile_path !== null
            ? `https://image.tmdb.org/t/p/w154/${crew?.profile_path}`
            : `https://i.ibb.co/0fFVykj/depositphotos-137014128-stock-illustration-user-profile-icon.webp`
        }
        alt="Crew_Photo"
        className="img-fluid rounded-circle mb-3"
        style={{ height: '7rem', width: '7.5rem', objectFit: 'cover' }}
      />
      <h6>{crew?.name}</h6>
      <h6 style={{ color: '#f5c518' }}>{crew?.job}</h6>
    </Col>
  )
}

export default CrewItem
