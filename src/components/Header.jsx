
import '../styles/header.css'

export default function Header() {
    const hi = "HELLO, I'M "
    const talk = "Let's Talk."
  return (
    <div className='HEADER_CONTAINER'>
        <header>
                <a href="#" className="my_name_logo">.°Nicolas°.</a>
                <div className="rigth_header_container">
                  <nav>
                    <a href="#about_me">ABOUT ME</a>
                    <a href="#">SERVICES</a>
                    <a href="#">PROJECTS</a>
                  </nav>

                  <div className="github_container">
                    <a href="#footer">{talk}</a>
                  </div>
                </div>        
        </header>
        <section className="Hero_section">

        <div className="Hero_section_absolute">
              <h1>{hi}</h1>
              <h1>NICOLAS.</h1>
              <h1>AN INDEPENDENT FRONTEND WEB DEVELOPER.</h1>
        </div>
        </section>
    </div>
    
  )
}
