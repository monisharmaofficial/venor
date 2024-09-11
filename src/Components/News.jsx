import first from '../assets/first.png'
import second from '../assets/second.png'
import third from '../assets/third.png'

const News = () => {
  return (
    <div className="news-container">

      <h5>
        Our <span>latest</span> News
      </h5>

      <div className="news-second-container">
        <div className="news-second-container-box1">
            <img className="news-second-container-box1-image" src={first} alt="" />
            <h1>Card One Heading</h1>
            <p>This is the first card description. It provides some information about the topic displayed in the image above.</p>
        </div>
        <div className="news-second-container-box2">
        <img className="news-second-container-box1-image" src={second} alt="" />
            <h1>Card Two Heading</h1>
            <p>This is the first card description. It provides some information about the topic displayed in the image above.</p>
        </div>
        <div className="news-second-container-box3">
        <img className="news-second-container-box1-image" src={third} alt="" />
            <h1>Card Three Heading</h1>
            <p>This is the first card description. It provides some information about the topic displayed in the image above.</p>
        </div>
      </div>
    </div>
  );
};

export default News;
