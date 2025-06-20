import './Contact.css';

const Contact = () => {
  return (
    <div className='contact'>
      <h4>See more of my work on LinkedIn and GitHub:</h4>
      <div className='flex'>
        <a href='https://www.linkedin.com/in/mireia-granzotto' target='_blank'>
          <img
            src='https://res.cloudinary.com/dr2vohk2z/image/upload/v1750401362/Marsexplorer/LinkedIn_b471jh.png'
            alt='linkedin'
          />
        </a>
        <a href='https://github.com/Mireia95' target='_blank'>
          <img
            src='https://res.cloudinary.com/dr2vohk2z/image/upload/v1750401362/Marsexplorer/GitHub_s5i331.png'
            alt='gitHub'
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
