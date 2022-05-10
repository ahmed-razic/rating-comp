import { useContext } from 'react'
import AppContext from '../context/AppContext'

function RatingStats() {
  const { data } = useContext(AppContext)

  let average =
    data.reduce((total, num) => {
      return total + num.rating
    }, 0) / data.length

  average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className='rating-stats'>
      <h4>{data.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}
export default RatingStats
