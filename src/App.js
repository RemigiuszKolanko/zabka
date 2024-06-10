import { ProjectTitle } from "./components/project/ProjectTitle";
import { ProjectBuilds } from "./components/project/ProjectBuilds";
import data from "./data.json";

function App() {
  const projects = data[0].projects;

  return (
    <div className="App">
      {projects.map((project) => (
        <div key={project.name}>
          <ProjectTitle name={project.name} />
          <ProjectBuilds builds={project.builds} />
        </div>)
      )}
    </div>
  );
}

export default App;
