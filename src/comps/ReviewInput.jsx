import { useState, useContext, useEffect } from 'react'
import AppContext from '../context/AppContext'
import RatingInput from '../comps/RatingInput'
import Button from './Button'
import Card from './Card'

function ReviewInput() {
  const [review, setReview] = useState('')
  const [rating, setRating] = useState(5)
  const [message, setMessage] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)

  const { addItem, editState, updateItem } = useContext(AppContext)

  useEffect(() => {
    if (editState.edit === true) {
      setReview(editState.item.review)
      setRating(editState.item.rating)
      setBtnDisabled(false)
    }
  }, [editState])

  const handleTextChange = function (e) {
    if (review === '') {
      setBtnDisabled(true)
      setMessage('null')
    } else if (review !== '' && review.trim().length < 10) {
      setBtnDisabled(true)
      setMessage('Please enter review at least 10 char long.')
    } else {
      setBtnDisabled(false)
      setMessage(null)
    }
    setReview(e.target.value)
  }

  const handleSubmit = function (e) {
    e.preventDefault()

    if (review.trim().length >= 10) {
      const newItem = {
        review: review,
        rating: rating,
      }

      if (editState.edit === true) {
        updateItem(editState.item.id, newItem)
      } else {
        addItem(newItem)
      }
      setReview('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <RatingInput
          select={(selectedRating) => {
            setRating(selectedRating)
          }}
        />
        <div className='input-group'>
          <input
            type='text'
            id='input-text'
            onChange={handleTextChange}
            placeholder='Write a review'
            value={review}
          />
          <Button type='submit' version='primary' isDisabled={btnDisabled}>
            Submit
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}
export default ReviewInput
