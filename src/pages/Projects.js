import {Form, useLoaderData} from "react-router-dom"

function Projects(props) {
  const projects = useLoaderData()
    return <>
    <h1>Record a New Project</h1>
    <Form action="/create" method="post">
      <input type="input" name="name" placeholder="Project Name"/>
      <input type="input" name="live" placeholder="Deployed Link"/>
      <input type="input" name="git" placeholder="Project Github"/>
      <input type="input" name="image" placeholder="Project Image"/>
      <input type="submit" value="Record Project"/>
    </Form>
    {projects.map((project) => {
      return <div>
        <h2>{project.name}</h2>
        <div className="image">
        <img src={project.image} alt="related project"/>
        </div>
        <a href={project.git}>
          <button>Github</button>
        </a>
        <a href={project.live}>
          <button>Live Site</button>
        </a>
      </div>
      
    })
  }
  </>
}
  
  export default Projects;