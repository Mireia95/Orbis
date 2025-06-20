import './Task.css';

const Task = ({ children }) => {
  return (
    <div className='task flex'>
      <span role='img' aria-label='rocket' style={{ marginRight: '16px' }}>
        🚀
      </span>{' '}
      <p> {children} </p>
    </div>
  );
};

export default Task;
