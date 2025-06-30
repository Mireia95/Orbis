import { Route, Routes } from 'react-router-dom'
import './App.css'
import Gallery from './Pages/Gallery/Gallery'
import Home from './Pages/Home/Home'
import Header from './Components/Layouts/Header/Header'
import NotFound from './Pages/NotFound/NotFound'
import About from './Pages/About/About'
import GalleryGalaxy from './Pages/GalleryGalaxy/GalleryGalaxy'
import Daily from './Pages/Daily/Daily'
import PictureDetails from './Components/PictureDetail/PictureDetails'

const App = () => {
  return (
    <>
      <Header />
      <main className='flex'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/daily' element={<Daily />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route
            path='/gallery-nebula'
            element={<GalleryGalaxy search='nebula' title='NEBULA PHOTOS' />}
          />
          <Route
            path='/gallery-galaxy'
            element={<GalleryGalaxy search='galaxy' title='GALAXY PHOTOS' />}
          />
          <Route path='/about' element={<About />} />
          <Route path='/image-nebula/:id' element={<PictureDetails />} />
          <Route path='/image-galaxy/:id' element={<PictureDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App
