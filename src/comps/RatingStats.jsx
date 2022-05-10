import { useContext } from 'react'
import AppContext from '../context/AppContext'

function RatingStats() {
  const { data } = useContext(AppContext)

  return <div>RatingStats</div>
}
export default RatingStats
