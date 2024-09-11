import "../style.css";
import computer from '../assets/computer.png';
import cup from '../assets/cup.png';
import phone from '../assets/phone.png';

const Card = () => {
  return (
    <div className="card-container">

        <div className="leftcard-container">
            <h1>How can we help?</h1>
            <p>We help premium brands achieve their future through innovation and creative perspectives. We grow your company through proprietary in-house ideas, tested and perfected over the years.</p>
        </div>
        <div className="rightcard-container">
            <div className="rightcard-container-boxone">
                <h2>Card 1 Heading</h2>
                <p>This is the first box description. It provides some information about the topic displayed in the image above.</p>
                <img className="rightcard-container-boxone-img1" src={computer} alt="cpmtr img" />
            </div>
            <div className="rightcard-container-boxtwo">
            <h2>Card 2 Heading</h2>
                <p>This is the first box description. It provides some information about the topic displayed in the image above.</p>
                <img className="rightcard-container-boxtwo-img2" src={cup} alt="medal img" />
            </div>
            <div className="rightcard-container-boxthree">
            <h2>Card 2 Heading</h2>
                <p>This is the first box description. It provides some information about the topic displayed in the image above.</p>
                <img className="rightcard-container-boxthree-img3" src={phone} alt="phn img" />
            </div>
        </div>
      
    </div>
  )
}

export default Card
