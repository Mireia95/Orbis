import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Gallery from './Pages/Gallery/Gallery'
import Home from './Pages/Home/Home'
import Header from './Components/Layouts/Header/Header'
import NotFound from './Pages/NotFound/NotFound'
import Rovers from './Pages/Rovers/Rovers'
import About from './Pages/About/About'
import Mars from './Components/Mars/Mars'

const App = () => {
  const location = useLocation()
  return (
    <>
      <Header />
      <main className='flex'>
        <Mars opacity={location.pathname === '/' ? 1 : 0.4} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rovers' element={<Rovers />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery/:id' element={<Image />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App
