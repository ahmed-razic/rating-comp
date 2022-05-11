import List from '../comps/List'
import RatingStats from '../comps/RatingStats'
import ReviewInput from '../comps/ReviewInput'
import Links from '../comps/Links'

function Home() {
  return (
    <div className='container'>
      <h4>Please enter your review</h4>
      <ReviewInput />
      <RatingStats />
      <List />
      <Links />
    </div>
  )
}
export default Home
