import { nanoid } from 'nanoid'
import SingleMoviePreview from '../components/SingleMoviePreview/SingleMoviePreview'
import { useStore } from '../store/watchlistStore'
import { movie } from '../utils/types/movie'

const Watchlist = () => {
  const { watchlist } = useStore()

  return (
    <div>
      <div className="d-flex justify-content-center flex-wrap py-5 mx-auto">
        {watchlist?.map((movie: movie) => {
          return <SingleMoviePreview key={nanoid()} movie={movie} />
        })}
      </div>
    </div>
  )
}

export default Watchlist
