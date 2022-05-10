import PropTypes from 'prop-types'

function Button({ children, type, isDisabled, version }) {
  return (
    <button type={type} className={`btn btn-${version}`} disabled={isDisabled}>
      {children}
    </button>
  )
}
Button.defaultProps = {
  type: 'button',
  isDisabled: 'true',
  version: 'primary',
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
  version: PropTypes.string,
}

export default Button
