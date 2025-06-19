import Task from '../../Components/Task/Task'
import './About.css'

const About = () => {
  return (
    <section id='about'>
      <div className='logoMG'>
        <img
          className='logoMG'
          src='https://res.cloudinary.com/dr2vohk2z/image/upload/v1750339553/Marsexplorer/LogoMG_white_j5vpzu.png'
          alt='logoMG'
        />
      </div>
      <p>
        Hello everyone 👋 <br />
        I'm currently learning React, and this is the first project I've built
        using it. Here are some of the key features and steps I followed during
        the development process:
      </p>
      <div className='tasks flex'>
        <Task>
          use of useState hook to manage and store component state in a clear
          and logical way
        </Task>
        <Task>use of useEffect hook to handle side effects</Task>
        <Task>
          A request to an external API to fetch and display dynamic data
        </Task>
        <Task>
          Implementation of React Router, with declared routes and navigation
          using Link components
        </Task>
        <Task>
          At least one route accepts a URL parameter, which is accessed using
          useParams hook inside the corresponding component and used with a
          specific purpose
        </Task>
      </div>
    </section>
  )
}

export default About
