import {useLoaderData} from "react-router-dom"

function About(props) {
  const about = useLoaderData()
    return <div className="about">
      <h2>{about.name}</h2>
      <h3>{about.email}</h3>
      <p>{about.bio}</p>
    </div>
  }
  
  export default About;