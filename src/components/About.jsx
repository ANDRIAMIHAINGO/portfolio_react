
import "../styles/about.css"
import nicolas from "../assets/images/blackpink01.jpg"

export default function About() {
  const frontend = "A brief intro. Who am i?"
  return (
    <section id="about_section">
         <div className="about_section_left">
           <h1>{frontend}</h1>
         </div>
         <div className="about_section_right">
           {/* <p className="hello_text">HELLO</p> */}
           <h1>THIS IS ME.</h1>
           <div className="my_img_cont">
           <img src={nicolas} alt="" />
              <div className="my_img_cont_overlay">

              </div>
           </div>
         </div>
    </section>
  )
}
