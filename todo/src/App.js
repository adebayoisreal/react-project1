import './App.css';
import Search from './Search';
import Notes from './Notes';
// import  {CiSearch}  from "react-icons/ci";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useState } from 'react';
import TaskModal from './Taskmodal';
function App() {
  const [ tasks, setTasks]= useState([])
  const[isModalOpen, setIsModalOpen]= useState(false)
  const handleAddTask = (task) => {
    setTasks([...tasks, {id:Date.now(), ...task}])
  }
  return (
    <div className="App">
     <div className="content">
    
    
    <h1>TODO LIST</h1>
    
     </div>
     <Search/>
     <Notes/>
    
     <button className='addBox' onClick={()=> setIsModalOpen(true)}>
     <IoMdAddCircleOutline  className='addIcon'/>
     </button>
     <TaskModal 
     isOpen={isModalOpen}
     onClose={()=> setIsModalOpen(false)
     }
     onAddTask={handleAddTask}/>
     <ul>
  {tasks.map((task) => (
    <li key={task.id}>
      <strong>{task.name}</strong>: {task.description}
    </li>
  ))}
</ul>
    </div>
  );
}

export default App;
