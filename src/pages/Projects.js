import {useLoaderData} from "react-router-dom"

function Projects(props) {
  const projects = useLoaderData()
    return projects.map((project) => {
      return <div>
        <h1>{project.name}</h1>
        <img src={project.image} alt="related project"/>
        <a href={project.git}>
          <button>Github</button>
        </a>
        <a href={project.live}>
          <button>Live Site</button>
        </a>
      </div>
    })
  }
  
  export default Projects;