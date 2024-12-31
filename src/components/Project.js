import Button from './Button';
import button_wb from '../images/button-bw.png';
import { useNavigate } from 'react-router-dom';
export default function Project({project,projectkey}){
    const navigate = useNavigate();

    function handleProjectViewClick(projectId){
        console.log('id clicked',projectId);
        navigate(`/${projectId}`);
    }
    console.log('projkey',projectkey)
    console.log('project',project)
    return   <div className="project">
                <div className="project-title">{project.title}</div>
                <div className="project-description ">{project.shortDescription}</div>
                <div className='view-project'><Button id={projectkey}  imagePath={button_wb} onClick={()=>{handleProjectViewClick(projectkey)}} /></div>
            </div>
}