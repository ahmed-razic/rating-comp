import List from '../comps/List'
import RatingStats from '../comps/RatingStats'
import RatingInput from '../comps/RatingInput'
import ReviewInput from '../comps/ReviewInput'

function Home() {
  return (
    <div className='container'>
      <h4>Please enter your review</h4>
      <RatingInput />
      <ReviewInput />
      <RatingStats />
      <List />
    </div>
  )
}
export default Home
