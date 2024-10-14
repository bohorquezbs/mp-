import PropTypes from 'prop-types';

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default function Button({
  label,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="
      border 
      border-gray-500 
      px-2 
      rounded-lg 
      cursor-pointer
      "
    >
      {label}
    </button>
  )
}