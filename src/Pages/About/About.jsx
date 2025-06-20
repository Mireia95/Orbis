import LogoMG from '../../Components/LogoMG/LogoMG';
import Task from '../../Components/Task/Task';
import './About.css';
import '../../Components/Styles/AnimIn.css';
import Contact from '../../Components/Contact/Contact';

const About = () => {
  return (
    <section id='about' className='flex animIn'>
      <div>
        <LogoMG />
        <p>
          Hello everyone 👋 <br />
          I'm currently learning React, and this is the first project I've built
          using it. Here are some of the key features and steps I followed
          during the development process:
        </p>
      </div>
      <div className='tasks flex'>
        <Task>
          use of useState hook to manage and store component state in a clear
          and logical way
        </Task>
        <Task> use of useEffect hook to handle side effects</Task>
        <Task>
          a request to an external API to fetch and display dynamic data
        </Task>
        <Task>
          implementation of React Router, with declared routes and navigation
          using Link components
        </Task>
        <Task>
          at least one route accepts a URL parameter, which is accessed using
          useParams hook inside the corresponding component and used with a
          specific purpose
        </Task>
      </div>
      <Contact />
    </section>
  );
};

export default About;
