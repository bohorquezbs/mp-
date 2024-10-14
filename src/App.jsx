import Navbar from './components/Navbar';
import { useContext } from 'react';
import { StaysContext } from './components/StaysContext'
import CardStay from './components/CardStay';
import Container from './components/Container';
import Empty from './components/Empty';
import Footer from './components/Footer';

function App() {
  const { stays } = useContext(StaysContext) || {};
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Container>
          <div className="flex justify-between mb-5 mt-10 items-center">
            <span className="font-bold text-2xl block">Stays in Finland</span>
            <span className="text-gray-500">{stays?.length}+ stays</span>
          </div>
          {stays?.length > 0 ?
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">{stays?.map((stay, index) => (
              <CardStay key={index} image={stay.photo} isSuperHost={stay.superHost} type={stay.type} title={stay.title} rating={stay.rating} beds={stay.beds} />
            ))}
            </div>
            : <Empty />}
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default App;