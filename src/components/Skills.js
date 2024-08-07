import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

const customLeftArrow = <img src={arrow1} alt="Left Arrow" className="custom-arrow custom-arrow-left" />;
const customRightArrow = <img src={arrow2} alt="Right Arrow" className="custom-arrow custom-arrow-right" />;

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>A snapshot of my key skills and expertise.<br></br> I continuously strive to improve and expand my set of both hard and soft skills.</p>
                        <Carousel responsive={responsive} 
                        infinite={true} 
                        customLeftArrow={customLeftArrow}
                        customRightArrow={customRightArrow}
                        className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="skill-meter" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="skill-meter" />
                                <h5>Machine Learning</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="skill-meter" />
                                <h5>JavaScript Ecosystem</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="skill-meter" />
                                <h5>Python Ecosystem</h5>
                            </div>     
                            <div className="item">
                                <img src={meter1} alt="skill-meter" />
                                <h5>C++</h5>
                            </div>                       
                            <div className="item">
                                <img src={meter3} alt="skill-meter" />
                                <h5>Data Analytics</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="skill-meter" />
                                <h5>Version Control</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="skill-meter" />
                                <h5>UI/UX Design</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="skill-meter" />
                                <h5>Latex</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="skill-meter" />
                                <h5>Figma</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="background-image" />
    </section>
  )
}