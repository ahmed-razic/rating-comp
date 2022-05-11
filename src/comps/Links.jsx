import { FaQuestion, FaPerson } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Links() {
  return (
    <div className='about-link'>
      <Link to='/about'>
        <FaQuestion size={30} />
      </Link>
      <br />
      <Link to='/contact'>
        <FaPerson size={30} />
      </Link>
    </div>
  )
}

export default Links
