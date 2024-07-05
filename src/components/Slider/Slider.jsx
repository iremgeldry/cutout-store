import cover1 from "../../assets/images/cover1.jpg";
import cover2 from "../../assets/images/cover2.jpg";
import cover3 from "../../assets/images/cover3.jpg";
import "./Slider.scss";

function Slider() {
  return (
    <>
      {/* <Carousel fade data-bs-theme="dark" interval={1000}>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={images[0]}/>
          <Carousel.Caption>
            <h3>Icons are here!</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={images[1]} />
          <Carousel.Caption>
            <h3>Flat vectors!</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={images[0]} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}

      <div
        id="hero-carousel"
        className="carousel carousel-fade carousel-dark slide"
        data-bs-ride="carousel"
      >
        {/* INDICATORS */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        {/* IMAGES */}
        <div className="carousel-inner">
          <div
            className="carousel-item active c-item"
            data-bs-interval="200000"
          >
            <img src={cover1} className="d-block w-100 c-image " alt="..." />
            <div className="carousel-caption d-md-flex flex-column top-0 align-items-center">
              <h1 className="display-1 fw-bolder text-primary text-capitalize mt-5 animate__animated animate__pulse">
                Flat Vector
              </h1>
              <h5>People, Anima &amp; Vegetation Vector Blocks</h5>
              <button className="btn btn-primary px-4 py-2 fs-5 mt-5 ">
                See more
              </button>
            </div>
          </div>
          <div className="carousel-item c-item" data-bs-interval="400000">
            <img src={cover2} className="d-block w-100 c-image" alt="..." />
            <div className="carousel-caption d-md-block top-0 ">
              <h1 className="display-1 fw-bolder text-primary text-capitalize mt-5 animate__animated animate__pulse">
                Realistic Cutouts
              </h1>
              <h5>
                Some representative placeholder content for the second slide.
              </h5>
              <button className="btn btn-primary px-4 py-2 fs-5 mt-5 animate__animated animate__tada">
                Go to collection
              </button>
            </div>
          </div>
          <div className="carousel-item c-item">
            <img src={cover3} className="d-block w-100 c-image" alt="..." />
            <div className="carousel-caption d-md-block top-0">
              <h1 className="display-1 fw-bolder text-primary text-capitalize mt-5 animate__animated animate__pulse">
                Discover all now!
              </h1>
              <h5>
                Some representative placeholder content for the third slide.
              </h5>
              <button className="btn btn-primary px-4 py-2 fs-5 mt-5 animate__animated animate__tada">
                See more
              </button>
            </div>
          </div>
        </div>
        {/* BUTTONS */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Slider;
