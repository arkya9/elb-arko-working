import React from "react";
import product1 from "../../../assets/website/img/job/product-1.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { nanoid } from "nanoid";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const FeaturedProducts = () => {
  const numbers = Array.from({ length: 10 }, (_, index) => index + 1);

  let imageArr = [];
  {
    numbers.map((i, index) => {
      const el = (
        <div className="p-2" key={nanoid()}>
          <div className="job-post bg-offWhite position-relative">
            <div className="job-type-badge position-absolute d-flex flex-column gap-2">
              <p className="job-type-badge-primary">Hourly {index + 1}</p>
              <p className="job-type-badge-secondary">Urgent</p>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="job-post-icon">
                <img src={product1} alt="" />
              </div>
              <p class="job-post-subtitle fw-bold">₹46,990</p>
              {/* <p className="job-post-subtitle fw-normal">$10 - $15</p> */}
              <h3 class="job-post-title fw-semibold">
                <a href="job-details.html">Canon R100 Mirrorless Camera...</a>
              </h3>
              <a href="job-details.html" className="w-btn-primary-xl">
                View Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                >
                  <path
                    d="M9 9L13 5M13 5L9 1M13 5L1 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      );
      imageArr.push(el);
    });
  }

  const ButtonGroup = ({ next, previous, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    const carouselItems = imageArr;

    return (
      <div className="carousel-button-group">
        <div className="d-flex gap-3">
          <button
            className={
              currentSlide === 0
                ? "recentJobPrev swiper-prev disable"
                : "recentJobPrev swiper-prev"
            }
            onClick={() => previous()}
          >
            Prev
          </button>
          <button className="recentJobNext swiper-next" onClick={() => next()}>
            Next
          </button>
        </div>
      </div>
    );
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="py-110">
      <div className="container">
        <div class="row mb-40 justify-content-between align-items-end">
          <div className="col-md-auto">
            <h2 className="fw-bold section-title">Featured Products</h2>
            <p class="section-desc">Get some Inspirations from 86K+ skills</p>
          </div>
          <div className="col-md-auto position-relative mt-30 mt-md-0">
            {ButtonGroup}
          </div>
        </div>
        <div className="recentJob">
          <Carousel
            arrows={false}
            responsive={responsive}
            transitionDuration={500}
            containerclassName="carousel-container"
            itemclassName="carousel-item-padding-40-px"
            customButtonGroup={<ButtonGroup />}
          >
            {imageArr}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

// arrows={false}
//             swipeable={false}
//             draggable={false}
//             showDots={false}
//             responsive={responsive}
//             ssr={true} // means to render carousel on server-side.
//             infinite={true}
//             // autoPlay={this.props.deviceType !== "mobile" ? true : false}
//             autoPlaySpeed={1000}
//             keyBoardControl={true}
//             customTransition="all .5"
//             transitionDuration={500}
//             containerclassName="carousel-container"
//             removeArrowOnDeviceType={["tablet", "mobile"]}
//             // deviceType={this.props.deviceType}
//             dotListclassName="custom-dot-list-style"
//             itemclassName="carousel-item-padding-40-px"
