import { useContext } from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';
import Card from './Card';

function Item(item) {
  const { deleteItem, editItem } = useContext(AppContext);

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'>{item.review}</div>
      <div className='name-display'>{item.userName}</div>
      <button className='edit' onClick={editItem}>
        <FaEdit color='green' />
      </button>
      <button className='delete' onClick={deleteItem}>
        <FaTimes color='red' />
      </button>
    </Card>
  );
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
};
export default Item;
