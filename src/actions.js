import {redirect} from "react-router-dom"

const URL = "https://portfolio-backend-rhm7.onrender.com"

export const createProject = async ({request}) => {
    const formData = await request.formData()
    const newProject = {
        name: formData.get("name"),
        live: formData.get("live"),
        git: formData.get("git"),
        image: formData.get("image")
    }
    await fetch(URL + "/projects" , {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newProject)
    })
    return redirect("/")
}