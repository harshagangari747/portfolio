import { useParams } from "react-router-dom";

export default function ViewProject({ projectList }) {
  var projectId = useParams();
  console.log("pid", projectId);
  const project = projectList[projectId.id];
  const { title, description, software, images } = project;

  console.log("selected proj ", project);

  return (
    <div className="projectpage">
      <div className="projectpage-title section-title">{title}</div>
      <div>
        <span className="projectpage-subheading">
          <b>Description </b>
        </span>
        <div className="description">{description}</div>
      </div>
      <div className="project-Software">
        <span className="projectpage-subheading">Software</span>
        <div>
          {software.map((x) => {
            return <span>{x}&nbsp;</span>;
          })}
        </div>
      </div>
      <div className="image">
        {images.map((image) => {
          return (
     
              <img src={require("../images/" + image)} alt="to be declared" />
 
          );
        })}
      </div>
    </div>
  );
}
