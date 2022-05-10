import PropTypes from 'prop-types';

function Header({ title, bgColor, textColor }) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyle} className='text-center'>
      <h1>{title}</h1>
    </header>
  );
}

Header.defaultProps = {
  title: 'Rating APP',
  bgColor: 'rgba(0,0,0,0.1)',
  textColor: 'blue',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
