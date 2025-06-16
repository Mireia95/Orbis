import { Route, Routes } from 'react-router-dom';
import './App.css';
import Gallery from './Pages/Gallery/Gallery';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main className='flex'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/gallery/:id' element={<Image />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
