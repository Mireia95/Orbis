import { Route, Routes } from 'react-router-dom'
import './App.css'
import Gallery from './Pages/Gallery/Gallery'
import Home from './Pages/Home/Home'
import Header from './Components/Layouts/Header/Header'
import NotFound from './Pages/NotFound/NotFound'
import About from './Pages/About/About'
import Daily from './Pages/Daily/Daily'
import PictureDetails from './Components/PictureDetail/PictureDetails'
import GalleryPicture from './Components/GalleryPicture/GalleryPicture'
import PlanetBG from './Components/PlanetBG/PlanetBG'

import MeteorsBG from './Components/MeteorsBG/Meteors'

const App = () => {
  return (
    <>
      <MeteorsBG />
      <PlanetBG />
      <Header />
      <main className='flex'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/daily' element={<Daily />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route
            path='/gallery-nebula'
            element={<GalleryPicture search='nebula' title='NEBULA PHOTOS' />}
          />
          <Route
            path='/gallery-galaxy'
            element={<GalleryPicture search='galaxy' title='GALAXY PHOTOS' />}
          />
          <Route path='/about' element={<About />} />
          <Route path='/picture/:id' element={<PictureDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App
