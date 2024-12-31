import Section from './Section.js';
import newyorksunset from "../images/newyorksunset.jpg";
import projects from '../projectDetails.json'
export default function Home(){
    const projectList = projects
    const sectionContent = [
        {
          title: "About Me",
          imageSource: newyorksunset,
          isTitle: true,
          description: "I am a graduate student from the 'George Washington University' in the discipline of Computer Science. I have an experience of 2 years as a DotNet developer. I worked as a dotnet intern at cognizant and then as a Junior Software Engineer at Epam India. Currently I am focusing on learning ReactJs, Containers using podman and solution architecting on AWS cloud platform. I have diverse background in programming languages. While I choose C# as my primary coding language, I am also capable of using Java, Python, Javascript",
        },
        {
          title: "Projects",
          imageSource: null,
          isTitle: false,
          projects: projectList
        },
      ];

    return <div className="App">
    {sectionContent.map((x, key) => (
      <Section key={key} content={x} />
    ))}
  </div>
}