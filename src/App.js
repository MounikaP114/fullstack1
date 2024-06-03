import ToDo from './components/ToDo';
import './index.css';
function App() {
  return (
    <div className="app">
      <div className='container'>
        <h1>To Do App</h1>
        <div className='top'>
          <input type="text" value='text' placeholder="add todo task"></input>
          <button className='button'>Add Task</button>
        </div>
        <div className='list'>
        </div>
          <ToDo className='' text={"Hi"}></ToDo>
          <ToDo className='' text={"Hi"}></ToDo>
          <ToDo className='' text={"Hi"}></ToDo>
          <ToDo className='' text={"Hi"}></ToDo>

        </div>   
    </div>
  );
}

export default App;
