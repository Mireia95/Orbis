import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Gallery from './Pages/Gallery/Gallery'
import Home from './Pages/Home/Home'
import Header from './Components/Layouts/Header/Header'
import NotFound from './Pages/NotFound/NotFound'
import Rovers from './Pages/Rovers/Rovers'
import About from './Pages/About/About'
import { GalleryMars } from './Pages/GalleryMars/GalleryMars'
import { GalleryGalaxy } from './Pages/GalleryGalaxy/GalleryGalaxy'

const App = () => {
  return (
    <>
      <Header />
      <main className='flex'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rovers' element={<Rovers />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/gallery-mars' element={<GalleryMars />} />
          <Route path='/gallery-galaxy' element={<GalleryGalaxy />} />
          <Route path='/about' element={<About />} />
          <Route path='/image-mars/:id' element={<Image />} />
          <Route path='/image-galaxy/:id' element={<Image />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App
