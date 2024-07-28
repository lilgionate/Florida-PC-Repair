import "./aboutUs.scss";
import about from "../../assets/aboutus.webp";

function AboutUs() {
    return (
        <div className="about-container">

            <div className="first-des">
                <div className="des-text">
                    <h1>WE BUILD, AND REPAIR PCs FOR YOU.</h1>
                    <p>We specialize in crafting, repairing, and fine-tuning 
                       PCs to perfection. Whether it's building a high-performance 
                       gaming rig, troubleshooting hardware issues, or optimizing 
                       system performance, we're your go-to experts. Trust us to 
                       deliver top-notch solutions tailored to your needs, ensuring 
                       your PC runs smoothly and efficiently.
                    </p>
               </div>

               <div className="image">
                    <img src={about} alt="" />
               </div>
            </div>

            <div className="second-des">
                <div className="des-text">
                    <h1>MAXIMUM FRAME RATES.</h1>
                    <p>Experience the pinnacle of productivity and efficiency 
                    with our high-performance computing solutions, delivering 
                    maximum frame rates for seamless operations and unmatched 
                    reliability.
                    </p>
                </div>

                <div className="image">
                    <img src={about} alt="" />
               </div>
            </div>

            <div className="third-des">
                <div className="des-text">
                    <h1>2 YEAR WARRANTY.</h1>
                    <p>Rest assured with our comprehensive protection. Our skilled 
                    team ensures your system's smooth operation, providing prompt 
                    assistance for any issues. All our systems come with comprehensive 
                    parts and labor coverage.
                    </p>
                </div>

                <div className="image">
                    <img src={about} alt="" />
               </div>
            </div>
        </div>
    )
}

export default AboutUs;