import { useQuery } from '@tanstack/react-query'
import Container from 'react-bootstrap/Container'
import { getGenresList } from '../apis/genres'
import MoviesBlockByGenre from '../components/MoviesBlockByGenre/MoviesBlockByGenre'
import { QUERY_GENRES_LIST } from '../utils/constants/queryKeys'
import { genreProps } from '../utils/types/genre'

const Movies = () => {
  const {
    isLoading,
    data: genresList,
    error,
    refetch,
  } = useQuery([QUERY_GENRES_LIST], () => getGenresList(), {})

  // console.log(data)
  return (
    <Container>
      {!isLoading &&
        genresList?.genres?.map((genre: genreProps) => {
          return <MoviesBlockByGenre key={genre.id} genre={genre} />
        })}
      <div>Recently Viewed Movies</div>
    </Container>
  )
}

export default Movies
