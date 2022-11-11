import { useQuery } from '@tanstack/react-query'
import { getGenresList } from '../apis/genres'
import MainLayout from '../layouts/MainLayout/MainLayout'
import { QUERY_GENRES_LIST } from '../utils/constants/queryKeys'

const Movies = () => {
  const { isLoading, data, error, refetch } = useQuery(
    [QUERY_GENRES_LIST],
    () => getGenresList(),
    {}
  )

  console.log(data)
  return (
    <>
      <MainLayout>
        <h1>Movie</h1>
      </MainLayout>
    </>
  )
}

export default Movies
