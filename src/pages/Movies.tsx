import { useQuery } from '@tanstack/react-query'
import { getGenresList } from '../apis/genres'
import MoviesBlockByGenre from '../components/MoviesBlockByGenre'
import MainLayout from '../layouts/MainLayout/MainLayout'
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
    <>
      <MainLayout>
        {!isLoading &&
          genresList?.genres?.map((genre: genreProps) => {
            return <MoviesBlockByGenre key={genre.id} genre={genre} />
          })}
        <h1>Recently Viewed Movies</h1>
      </MainLayout>
    </>
  )
}

export default Movies
