import { useQuery } from '@tanstack/react-query'
import { getGenresList } from '../apis/genres'
import { QUERY_GENRES_LIST } from '../utils/constants/queryKeys'

const Movies = () => {
  const { isLoading, data, error, refetch } = useQuery(
    [QUERY_GENRES_LIST],
    () => getGenresList(),
    {}
  )

  console.log(data)
  return <div>Enter</div>
}

export default Movies
