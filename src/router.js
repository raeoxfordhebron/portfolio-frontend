import { createRoutesFromElements,createBrowserRouter, Route } from "react-router-dom";
import App from "./App"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import {aboutLoader, projectsLoader} from "./loaders"
import {createProject} from "./actions"

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route path="" element={<Home/>}/>
        <Route path="/about" element={<About/>} loader={aboutLoader}/>
        <Route path="/projects" element={<Projects/>} loader={projectsLoader}/>
        <Route path="create" action={createProject}/>
    </Route>
))

export default router