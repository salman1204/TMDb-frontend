import { useParams } from 'react-router-dom'

const Genre = () => {
  const { genreId } = useParams()
  console.log(genreId)
  return <div>Enter</div>
}

export default Genre
