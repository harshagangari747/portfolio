import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import ViewProject from "./components/ViewProject";
import ErrorPage from "./ErrorPage";

function App() {
  const projectsList={
    0:{
      title:"Basic Computer Architecture Simulation",
      description:"Simulated RISC architecture pipeline",
      software:['Java','Swing','Eclipse'],
      images:['newyorksunset.jpg','newyorksunset.jpg']
    },
    1:{
      title:"GreenShoeWebStore",
      description:"Simulated RISC architecture pipeline",
      software:['Java','Swing','Eclipse'],
      images:['image1.png']
    }
  }
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
