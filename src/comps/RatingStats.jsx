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
    <div className='rating-stats mt-5'>
      <h6>{data.length} Reviews</h6>
      <h6>Average Rating: {isNaN(average) ? 0 : average}</h6>
    </div>
  )
}
export default RatingStats
