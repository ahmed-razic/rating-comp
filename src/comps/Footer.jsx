import PropTypes from 'prop-types';

function Footer({ title, bgColor, textColor }) {
  const footerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <footer style={footerStyle} className='text-center'>
      {title} &copy; 2022
    </footer>
  );
}

Footer.defaultProps = {
  title: 'Ahmed Razic',
  bgColor: 'rgba(0,0,0,0.1)',
  textColor: 'blue',
};

Footer.propTypes = {
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};
export default Footer;
