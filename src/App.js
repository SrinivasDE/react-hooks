import "./App.css";
import Main from "./practice1/Main";
import EmployeeData from "./screens/EmployeeData";

// import Ex1 from './components/Ex1';
// import MovieList from './components/MovieList';
// import Prac from './components/Prac';
// import StateConcept from './components/StateConcept';
import ToDoApp from "./screens/ToDoApp";
// import DataNames from './screens/useStateTask/DataNames';
// import NamesParent from './screens/useStateTask/NamesParent';

function App() {
  

  return (
    <div className="App">
      {/* <StateConcept /> */}
      {/* <MovieList/> */}
      {/* <Prac/> */}
      {/* <DataNames/> */}
      {/* <NamesParent/> */}
      {/* <ToDoApp getDataFromChild={getData} /> */}
      <EmployeeData/>
      <Main/>
       
    
    </div> 
  );
}

export default App;
