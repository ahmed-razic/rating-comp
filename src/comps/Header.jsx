import PropTypes from 'prop-types'

function Header({ title, bgColor, textColor }) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  }
  return (
    <header style={headerStyle}>
      <div className='container'>
        <h1 className='text-center'>{title}</h1>
      </div>
    </header>
  )
}

Header.defaultProps = {
  title: 'Rating APP',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header
