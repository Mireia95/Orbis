import LogoMG from '../../Components/LogoMG/LogoMG'
import Task from '../../Components/Task/Task'
import './About.css'
import '../../Components/Styles/AnimIn.css'
import Contact from '../../Components/Contact/Contact'
import PlanetBG from '../../Components/PlanetBG/PlanetBG'

const About = () => {
  return (
    <>
      {/*      <PlanetBG opacity={0.4} /> */}
      <section id='about' className='flex animIn'>
        <div>
          <LogoMG />
          <p>
            Hello everyone 👋 <br />
            I'm currently learning React, and this is the first project I've
            built using it. Here are some of the key features and steps I
            followed during the development process:
          </p>
        </div>
        <div className='tasks flex'>
          <Task>fully designed by me using Figma</Task>
          <Task>
            {' '}
            implementation of React Router, with declared routes and navigation
            using Link components{' '}
          </Task>
          <Task>
            use useState hook to create and manage local state inside my
            components, so the UI can update dynamically when the state changes
          </Task>
          <Task>
            use useEffect hook to create and manage local state inside my
            components, so the UI can update dynamically when the state changes
          </Task>
          <Task>
            use of useParams hook to access the parameters of the URL, returning
            a specific element of json response
          </Task>
          <Task> web responsive page </Task>
        </div>
        <Contact />
      </section>
    </>
  )
}

export default About
