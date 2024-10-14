import PropTypes from 'prop-types';
CardStay.propTypes = {
  image: PropTypes.string.isRequired,
  isSuperHost: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  beds: PropTypes.number,
}

export default function CardStay({
  image,
  isSuperHost,
  type,
  title,
  rating,
  beds,
}) {
  return (
    <div
      className="
      w-full
      h-full
      flex
      flex-col
      justify-between
      "
    >
      <div className="h-80 overflow-hidden rounded-3xl">
        <img src={image} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-wrap items-center mt-3 py-2">
          <div className="flex flex-wrap items-center gap-2">
            {isSuperHost && <span className="font-semibold px-4 border-2 border-gray-600 rounded-2xl truncate">Super Host</span>}
            <span className="truncate">{type}.</span>
            {beds && <span>{beds} beds</span>}
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <AiFillStar color="#EB5757" />
            <span>{rating}</span>
          </div>
        </div>
        <span className="font-bold mt-auto">{title}</span>
      </div>
    </div>
  )
}