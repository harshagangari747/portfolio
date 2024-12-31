import { useParams } from "react-router-dom";

export default function ViewProject({ projectList }) {
  var projectId = useParams();
  const project = projectList[projectId.id];
  const { title, longDescription, software, images } = project;


  console.log("selected proj ", project);

  return (
    <div className="projectpage border-style">
      <div className="projectpage-title section-title">{title}</div>
      <div>
        <span className="projectpage-subheading">
          <b>Story </b>
        </span>
        <div className="projectpage-description">{longDescription}</div>
      </div>
      <div className="project-Software">
        <span className="projectpage-subheading">Software</span>
        <div>
          {software.map((x) => {
            return <span>{x}&nbsp;</span>;
          })}
        </div>
      </div>
      <div className="viewproject-imagebox">
        {images.map((image) => {
          return (
            <div className="viewproject-image">
              <img src={require("../images/" + image)} className="viewproject-imagedims" alt="to be declared" />
              </div>
          );
        })}
      </div>
    </div>
  );
}
