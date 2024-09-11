

const Footer = () => {
  return (
    <div className="footer-container">

        <h1>Are you looking for <span>Web Design ?</span></h1>

        <div className="footer-box">
            <div className="footer-boxleft">
                <h1>READY TO DO IT</h1>
                <h2>Lets get to Work</h2>
                <button>Get the offer</button>
            </div>
            <div className="footer-boxright">
                <ul className="first-list">
                    <p>Quick Links</p>
                    <li>GDPR</li>
                    <li>Terms and Conditions</li>
                    <li>Privacy Policy</li>
                </ul>

                <ul className="second-list">
                    <p>Say Hello</p>
                    <li>admin@example.com</li>
                    <li>hr@example.com</li>
                </ul>

                <div className="Footer-link">
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Behance</p>
                </div>

                <p className="footer-last">© 2021. All rights reserved by Sweet-Themes. We are tracking any intention of piracy.</p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
