import "../styles/footer.css"

export default function Footer() {

    const btn_text = "---- >" 
    const text_lets_work ="Let's work together."
  return (
    <footer id="footer">
        <div className="footer_left">
            <div className="footer_left_follow">
              <p>Follow</p>
            </div>
            <div className="footer_left_media_icons">
                <div className="footer_media_item"></div>
                <div className="footer_media_item"></div>
                <div className="footer_media_item"></div>
            </div>
        </div>
        <div className="footer_rigth">
           <div className="footer_rigth_blabla">
             <h1>{text_lets_work}</h1>
             <p>Email : nyoclass@gmail.com</p>
             <p>All dolor sit amet consectetur adipisicing elit. Eius neque quisquam dolore blanditiis. Lorem ipsum dolor sit amet.</p>
           </div>
           <div className="footer_rigth_form">
              <form action="">
                <input type="email" name="" id="" placeholder="Enter your email"/>
                <button>{btn_text}</button>
              </form>
           </div>
           <div className="footer_rigth_bottom_end">
             <p>@ 2023 Designed by Nicolas.</p>
           </div>
        </div>className
    </footer>
  )
}
