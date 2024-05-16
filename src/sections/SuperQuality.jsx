import { shoe8 } from "../assets/images";
import Button from "../components/Button";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container "
    >
      {/* Services Container */}
      <div className="serviceContainer">
        <h2 className="header-text font-palanquin text-capitalize font-bold mb-8   ">
          we provide you
          <span className="text-coral-red">
            {" "}
            super <br /> quality{" "}
          </span>{" "}
          shoe
        </h2>
        <p className="mt-4 lg:max-w-lg info-text centered-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text centered-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11 flex justify-center sm:justify-start">
          <Button label="View details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center md:justify-end items-center">
        <img
          src={shoe8}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
