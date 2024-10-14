import { useContext, useState } from 'react';
import { StaysContext } from './StaysContext';
import Container from './Container';
import NavModal from './NavModal.jsx';

export default function Navbar() {
  const { cityValue, setCityValue, setGuestCount, setCountryValue, countryValue } = useContext(StaysContext);
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setTimeout(() => {
      setModalOpen(true);
    }, 300);
  };

  const handleGoToHome = () => {
    setCityValue('Helsinki');
    setCountryValue('Finland');
    setGuestCount(0);
  }

  return (
    <Container>
      <nav
        className="
        flex
        flex-col
        gap-y-5
        justify-between
        items-center
        mt-4
        sm:flex-row
        "
      >
        <div
          onClick={handleGoToHome}
          className="self-start cursor-pointer"
        >
          <img src="/assets/images/logo.png" />
        </div>
        <div
          onClick={handleModalOpen}
          className="
          shadow-md
          border
          rounded-full
          grid 
          grid-flow-col-dense
          gap-x-2
          px-4
          divide-x
          overflow-hidden
          cursor-pointer
          "
        >
          <div className="h-full py-3 flex items-center justify-center">{cityValue}, {countryValue}</div>
          <div className="h-full py-3 flex items-center justify-center text-gray-400 pl-3">Add guests</div>
          <div className="h-full py-3 flex items-center justify-center text-pink-500 pl-3"><ImSearch /></div>
        </div>
        <NavModal open={modalOpen} onHide={() => setModalOpen(false)} />
      </nav>
    </Container>
  )
}
