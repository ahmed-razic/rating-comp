import PropTypes from 'prop-types'

function Footer({ title, bgColor, textColor }) {
  const footerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  }
  return (
    <footer style={footerStyle}>
      <div className='container'>
        <p className='mb-0 text-center'>{title} &copy; 2022</p>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  title: 'Ahmed Razic',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
}

Footer.propTypes = {
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}
export default Footer
