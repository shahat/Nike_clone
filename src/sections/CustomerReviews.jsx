import { FaAngleLeft, FaAngleRight, FaQuoteLeft } from "react-icons/fa";
import Slider from "react-slick";
import { reviews } from "../constants/constants";
import { ReviewsCard, ReviewsButton } from "../components";

export default function CustomerReviews() {
  // Slider settings
  var settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <ReviewsButton icon={<FaAngleRight />} order="order-3" />,
    prevArrow: (
      <ReviewsButton
        icon={<FaAngleLeft />}
        order="order-2"
        customStyle="justify-end"
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <section id="reviews" className="max-container ">
      <h2 className="header-text  ">
        What Our
        <span className="text-coral-red"> Clients </span> Say !
      </h2>
      <p className="m-auto sm:ms-0 my-4 max-w-lg  text-center sm:text-start  info-text">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <Slider
        {...settings}
        className="testimonial-slider flex flex-wrap  grid-cols-4 "
        data-aos="fade-up"
      >
        {reviews.map((item, index) => (
          <ReviewsCard item={item} key={"review_" + index} />
        ))}
      </Slider>
    </section>
  );
}
