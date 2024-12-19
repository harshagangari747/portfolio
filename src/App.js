import "./App.css";
import Section from "./components/Section";
import newyorksunset from "./images/newyorksunset.jpg";

function App() {
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
      projects: [
        {
          projectTitle: "Basic Computer Arch Simulation",
          projectDescription:
            "Developed a Java windows application to simulate a RISC pipeline architecture",
        },
        {
          projectTitle: "Green Shoe Store",
          projectDescription:
            "Along with 4 others, developed a e-commerce web shoe store using Java, MySQL, ReactJs, AWS SDK"
        }
      ],
    },
  ];

  return (
    <div className="App">
      {sectionContent.map((x, key) => (
        <Section key={key} content={x} />
      ))}
    </div>
  );
}

export default App;
