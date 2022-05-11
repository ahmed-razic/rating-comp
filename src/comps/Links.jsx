import { FaQuestion, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Links() {
  return (
    <div className='about-link d-flex justify-content-around mb-3'>
      <Link to='/about'>
        <FaQuestion size={30} />
      </Link>
      <br />
      <Link to='/contact'>
        <FaGithub size={30} />
      </Link>
    </div>
  )
}

export default Links
