import "./Hero-Top.scss";

function HeroTop (props) {
    return (
      <>
      <div className={props.cName}>
        <img src={props.heroImg} alt="HeroImg" className="img-hero-top"/>

        <div className="hero-text">
          <h1>{props.title}</h1>     
        </div>
      </div>
      </>
    )
  }
  
  export default HeroTop