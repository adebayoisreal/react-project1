import './App.css';
import Search from './Search';
import Notes from './Notes';
import  {CiSearch}  from "react-icons/ci";
import { IoMdAddCircleOutline } from "react-icons/io";
function App() {
  return (
    <div className="App">
     <div className="content">
      <h1>TODO LIST</h1>
     </div>
     <Search/>
     <Notes/>
     <IoMdAddCircleOutline />
    </div>
  );
}

export default App;
