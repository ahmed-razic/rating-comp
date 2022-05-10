import { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Item from './Item'
import AppContext from '../context/AppContext'

function List() {
  const { data } = useContext(AppContext)

  if (!data || data.length === 0) {
    return <p className='lead'>There are no items in data</p>
  }

  return (
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
  )
}
export default List
