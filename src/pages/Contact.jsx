import { Link } from 'react-router-dom'
import Card from '../comps/Card'

function Contact() {
  return (
    <Card>
      <div className='about'>
        <h1>Contact Author</h1>
        <p>
          You can contact the author on
          <a
            href='https://github.com/ahmed-razic'
            target='_blank'
            rel='noopener noreferrer'
          >
            {' '}
            Github
          </a>
          .
        </p>
        <p>
          <Link to='/'>Back To Home</Link>
        </p>
      </div>
    </Card>
  )
}

export default Contact
