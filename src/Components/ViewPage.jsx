import "../style.css";
import logo from '../assets/logo.png';


const ViewPage = () => {
  return (
    <div className="view-container">

        <div className="leftview-container">
            <h3>Are you looking for <span> Web Design?</span></h3>
            <p>Whether you need a new logo, website, video, marketing campaign, or ebook created for your company, the key to making your project a success starts with a well-thought-out creative brief.</p>
            <div className="leftview-container-btn">
                <button className="leftview-container-leftbtn">Contact Us</button>
                <button className="leftview-container-rightbtn">View Our Portfolio</button>
            </div>
        </div>
        <div className="rightview-container">
        <img className="rightview-container-img" src={logo} alt="Logo" />
        </div>
      
    </div>
  )
}

export default ViewPage
