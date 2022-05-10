import PropTypes from 'prop-types';

function Card({ children }) {
  return <Card className='container'>{children}</Card>;
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
