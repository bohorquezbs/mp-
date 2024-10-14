import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import useApi from './UseApi';
import Header from './Header';
import SquareButton from './Button';
import { StaysContext } from './StaysContext';

NavModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};

const Options = {
  LOCATION: 0,
  GUESTS: 1,
}

export default function NavModal({
  open,
  onHide,
}) {
  const {
    cityValue,
    countryValue,
    setCityValue,
    setCountryValue,
    setGuestCount,
  } = useContext(StaysContext);
  const { data: staysApi } = useApi();
  const [activeOption, setActiveOption] = useState(Options.LOCATION);
  const [locationCity, setLocationCity] = useState(cityValue);
  const [locationCountry, setLocationCountry] = useState(countryValue);
  const [guestAdults, setGuestAdults] = useState(0);
  const [guestChildren, setGuestChildren] = useState(0);

  const handleSearch = () => {
    setCityValue(locationCity);
    setCountryValue(locationCountry);
    setGuestCount(guestAdults + guestChildren);
    onHide();
  }

  console.log(locationCity)
  let bodyOption = null;

  if (activeOption === Options.LOCATION) {
    const filteredStays = staysApi?.filter((stay, index) => {
      const firstIndex = staysApi?.findIndex((objStay) => objStay.city === stay.city && objStay.country === stay.country);
      return index === firstIndex;
    });

    bodyOption = (
      <ul className="text-gray-600 text-lg px-5 col-span-3">
        {filteredStays?.map((stay, index) => (
          <li
            key={index}
            onClick={() => {
              setLocationCity(stay.city)
              setLocationCountry(stay.country)
            }}
            className="
            flex 
            items-center 
            gap-5
            cursor-pointer
            py-2
            hover:bg-red-50
            "
          >
            <IoLocationSharp /> {stay.city}, {stay.country}
          </li>
        ))}
      </ul>
    )
  }

  if (activeOption === Options.GUESTS) {
    bodyOption = (
      <ul className="flex flex-col gap-8 text-gray-600 text-lg col-start-2 px-5">
        <li className="flex flex-col">
          <Header
            title="Adults"
            subtitle="Ages 13 or above"
          />
          <div className="mt-2">
            <SquareButton label="-" onClick={() => setGuestAdults((prev) => prev === 0 ? 0 : prev - 1)} />
            <span className="mx-2">{guestAdults}</span>
            <SquareButton label="+" onClick={() => setGuestAdults((prev) => prev + 1)} />
          </div>
        </li>
        <li className="flex flex-col">
          <Header
            title="Children"
            subtitle="Ages 2-12"
          />
          <div className="mt-2">
            <SquareButton label="-" onClick={() => setGuestChildren((prev) => prev === 0 ? 0 : prev - 1)} />
            <span className="mx-2">{guestChildren}</span>
            <SquareButton label="+" onClick={() => setGuestChildren((prev) => prev + 1)} />
          </div>
        </li>
      </ul >)
  }

  return (
    <div
      className={`
      fixed
      z-10
      top-0
      left-0
      right-0
      h-screen
      ${open ? 'block' : 'hidden'}
    `}
    >
      <div className="bg-white py-2 px-3 relative shadow-2xl shadow-red-300/30">
        <div className="flex items-center justify-between lg:hidden">
          <h1 className="text-xs font-bold">Edit your search</h1>
          <IoClose
            onClick={onHide}
            className="text-2xl"
          />
        </div>
        <div
          className="
          overflow-hidden
          border
          shadow-md
          rounded-3xl
          grid 
          grid-flow-row-dense
          my-5
          lg:grid-cols-3
          lg:divide-x
          lg:items-center
          border-collapse
          "
        >
          <div className="h-full">
            <div
              onClick={() => setActiveOption(Options.LOCATION)}
              className={`
              cursor-pointer
              h-full 
              py-5
              flex
              items-center
              px-5 
              relative 
              hover:bg-red-50
              text-gray-400
              border-b
              ${activeOption === Options.LOCATION && 'lg:rounded-3xl lg:border-2 lg:border-gray-800 text-gray-800'}
              `}
            >
              <span className="uppercase font-bold text-[.6em] absolute top-2 text-black">Location</span>
              {locationCity}, {locationCountry}
            </div>
          </div>
          <div className="h-full">
            <div
              onClick={() => setActiveOption(Options.GUESTS)}
              className={`
              cursor-pointer
              h-full 
              py-5
              flex
              items-center
              px-5 
              relative 
              hover:bg-red-50 
              text-gray-400
              ${activeOption === Options.GUESTS && 'lg:rounded-3xl lg:border-2 lg:border-gray-800 text-gray-800'}
              `}
            >
              <span className="uppercase font-bold text-[.6em] absolute top-2 text-black">Guests</span>
              Add guests
            </div>
          </div>
          <div
            onClick={() => setActiveOption(Options.GUESTS)}
            className={`
            py-2
            flex 
            items-center 
            justify-center
            text-gray-500 
            px-5 
            absolute 
            bottom-0
            left-0
            right-0
            border-none
            lg:relative
            lg:border-solid
            `}
          >
            <button
              onClick={handleSearch}
              className="
              bg-red-400 
              text-white 
              px-5 
              py-3 
              rounded-3xl 
              flex items-center 
              cursor-pointer
              "
            >
              <ImSearch />
              <span className="ml-2">Search</span>
            </button>
          </div>
        </div>

        <div
          className={`
          lg:grid
          grid-cols-3
          h-60
          overflow-y-auto
          mb-20
          `}
        >
          {bodyOption}
        </div>
      </div>

      <div
        onClick={onHide}
        className="bg-black bg-opacity-50 w-full h-full"
      />
    </div>
  )
}