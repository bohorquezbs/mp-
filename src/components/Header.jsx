import PropTypes from 'prop-types';

Header.propTypes = {
  title: PropTypes.string.isRequired,
  titleColor: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
  subtitleColor: PropTypes.string,
}

export default function Header({
  title,
  titleColor,
  subtitle,
  subtitleColor,
}) {
  return (
    <div>
      <h3 className="font-semibold text-base" style={{ color: titleColor }}>{title}</h3>
      <p className="text-sm text-gray-400" style={{ color: subtitleColor }}>{subtitle}</p>
    </div>
  )
}