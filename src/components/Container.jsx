import PropTypes from 'prop-types';

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Container({
  children,
}) {
  return (
    <div className="container mx-auto px-2">
      {children}
    </div>
  )
}