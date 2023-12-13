import "../styles/projects.css"
import first_projects_backg from "../assets/images/C10.png"
export default function Projects() {
  return (
    <section className="projects_section_container">

       <div className="first_project_container">
            <div className="img_container_for_projects">
                <div className="first_project_cont">
                   <img src={first_projects_backg} alt="" />
                </div>
            </div>
            <h1>FRONTEND DEVELOPEMENT</h1>
            <p>Ecommerce Website</p>
       </div>

       <div className="blankspace">

       </div>
    </section>
  )
}
