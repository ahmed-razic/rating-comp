import PropTypes from 'prop-types';

function Button({ children, type, isDisabled, version }) {
  return (
    <button type={type} version={`btn-${version}`} disabled={isDisabled}>
      {children}
    </button>
  );
}
Button.defaultProps = {
  type: 'button',
  isDisabled: 'true',
  version: 'primary',
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.string,
  version: PropTypes.string,
};

export default Button;
