import { nanoid } from 'nanoid'
import { Container, Row } from 'react-bootstrap'
import SingleMoviePreview from '../components/SingleMoviePreview/SingleMoviePreview'
import { useStore } from '../store/watchlistStore'
import { movie } from '../utils/types/movie'

const Watchlist = () => {
  const { watchlist } = useStore()

  return (
    <Container className="min-vh-100 pt-5 overflow-hidden ">
      <Row>
        <h2
          className={`ms-3 mb-1 mb-md-3 d-flex flex-start text-uppercase `}
          style={{ color: '#f5c518', borderLeft: '6px solid #f5c518' }}
        >
          <span className="ms-2">MY Watchlist</span>
        </h2>
        <div className="d-flex justify-content-center flex-wrap py-md-3 mx-auto">
          {watchlist?.map((movie: movie) => {
            return <SingleMoviePreview key={nanoid()} movie={movie} />
          })}
          {watchlist.length === 0 && (
            <h4 className="py-1 ">Your Watchlist is empty.</h4>
          )}
        </div>
      </Row>
    </Container>
  )
}

export default Watchlist
