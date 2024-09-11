import plain from "../assets/plain.png";
import work from "../assets/work.png";

const About = () => {
  return (
    <div className="About-container">
      <div className="leftAbout-container">
        <div className="leftAbout-container-leftimg">
          {" "}
          <img className="plain-image" src={plain} alt="" />
        </div>

        <div className="leftAbout-container-righttimg">
          {" "}
          <img className="work-image" src={work} alt="" />
        </div>
      </div>

      <div className="rightAbout-container">
        <h2>ABOUT AGENCY</h2>
        <h3>Unlimited Skills for Super Projects.</h3>
        <p>
          Web design encompasses many different skills and disciplines in the
          production and maintenance of websites. The different areas of web
          design include web graphic design, interface design, including
          standardized code.
        </p>
        <p>
          Web design partially overlaps web engineering in the broader scope of
          web development. Web designers are expected to have an awareness of
          usability.
        </p>
        <button className="about-btn">Get the Offer</button>
      </div>
    </div>
  );
};

export default About;
