import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import ViewProject from "./components/ViewProject";
import ErrorPage from "./ErrorPage";
import projects from './projectDetails.json'

function App() {
  const projectsList= projects;
  console.log('list',projectsList)
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<ViewProject projectList={projectsList}/>}/>
        <Route path="*" errorElement={<ErrorPage/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
