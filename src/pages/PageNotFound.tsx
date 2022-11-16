import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div
      style={{ minHeight: '95vh' }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="text-center">
        <img
          src="https://i.ibb.co/C1jgWgs/Pngtree-page-not-found-or-error-6501261.png"
          alt="Page not found"
          className="img-fluid"
          style={{ height: '25em' }}
        />
        <br />
        <Button>
          <Link to={`/movies`} className="text-light text-decoration-none">
            Back to Homepage{' '}
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default PageNotFound
