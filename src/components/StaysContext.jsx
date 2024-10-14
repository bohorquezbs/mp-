import PropTypes from 'prop-types';
import { useState, createContext, useEffect } from 'react';
import useApi from './UseApi';

export const StaysContext = createContext();

StaysProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
export default function StaysProvider({
  children,
}) {
  const [cityValue, setCityValue] = useState('Helsinki');
  const [countryValue, setCountryValue] = useState('Finland');
  const [guestCount, setGuestCount] = useState(0);
  const { loading, data: staysApi } = useApi();
  const [stays, setStays] = useState([]);

  useEffect(() => {
    if (!loading && staysApi) {
      const staysFounded = staysApi.filter((stays) => {
        if (stays.maxGuests >= (guestCount)) {
          return stays.city === cityValue && stays.country === countryValue
        }
      });
      return setStays(staysFounded);
    }
  }, [
    staysApi,
    loading,
    guestCount,
    cityValue,
    countryValue,
  ]);

  return (
    <StaysContext.Provider
      value={{
        stays,
        cityValue,
        countryValue,
        guestCount,
        setCityValue,
        setCountryValue,
        setGuestCount,
      }}
    >
      {children}
    </StaysContext.Provider>
  )
}