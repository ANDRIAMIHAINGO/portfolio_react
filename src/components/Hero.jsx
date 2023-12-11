
import "../styles/hero.css"
export default function Hero() {
   const hi_im_nicolas = "Hi, i'm Nicolas."
  
  return (
    <section className="Hero_section">

       <div className="Hero_section_absolute">
       <h1 className="hi_im_nicolas_text">{hi_im_nicolas}</h1>
       <h1 className="hi_im_nicolas_text">{hi_im_nicolas}</h1>
       <h1 className="hi_im_nicolas_text">{hi_im_nicolas}</h1>
       </div>
    </section>
  )
}
