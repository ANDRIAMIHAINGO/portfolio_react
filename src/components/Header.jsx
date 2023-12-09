import '../styles/header.css'

export default function Header() {
    const talk = "Let's Talk."
  return (
    <header>
        <a href="#" className="my_name_logo">Nicolas</a>
        <div className="rigth_header_container">
          

          <div className="github_container">
             <a href="#footer">{talk}</a>
          </div>
        </div>
    </header>
  )
}
