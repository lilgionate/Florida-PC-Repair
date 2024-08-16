import PropTypes from 'prop-types';
import "./Hero-Top.scss";

function HeroTop(props) {
    return (
      <div className={props.className}>
        <img src={props.heroImg} alt="HeroImg" className="img-hero-top"/>
        <div className="hero-text">
          <h1>{props.title}</h1>     
        </div>
      </div>
    );
}

// Define prop types for the HeroTop component
HeroTop.propTypes = {
  className: PropTypes.string.isRequired,  // `className` should be a string and is required
  heroImg: PropTypes.string.isRequired,    // `heroImg` should be a string (URL) and is required
  title: PropTypes.string.isRequired       // `title` should be a string and is required
};

export default HeroTop;
