import { useContext } from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'
import PropTypes from 'prop-types'
import AppContext from '../context/AppContext'
import Card from './Card'

function Item({ item }) {
  const { deleteItem, prepareEdit } = useContext(AppContext)

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button className='edit' onClick={prepareEdit(item)}>
        <FaEdit color='green' />
      </button>
      <button className='close' onClick={deleteItem(item.id)}>
        <FaTimes color='red' />
      </button>
      <div className='text-display'>{item.review}</div>
      <p className='lead mt-3'>{item.userName}</p>
    </Card>
  )
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
}
export default Item
