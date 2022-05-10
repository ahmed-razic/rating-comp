import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Item from './Item';
import AppContext from '../context/AppContext';

function List() {
  const { data } = useContext(AppContext);

  if (data === null || data.length === 0) {
    return <p className='lead'>There are no items in data</p>;
  }

  return (
    <div className='list'>
      <AnimatePresence>
        {data.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Item key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
export default List;
