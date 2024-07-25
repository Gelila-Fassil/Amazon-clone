import { Carousel } from "react-responsive-carousel";
// import classes from "./Banner.module.css";
import { img } from "./data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from './Banner.module.css'
const Banner = () => {
  return (
    <div >
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        interval={3000}
      >
        {img.map((imageItemLink, index) => (
          <div key={index} >
            <img src={imageItemLink} alt={`slide-${index}`} />
          </div>
        ))}
      </Carousel>
      <div className={classes.hero_img}></div>
    </div>
  );
};

export default Banner;
