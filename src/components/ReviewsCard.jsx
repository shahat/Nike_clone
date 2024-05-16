import { FaQuoteLeft } from "react-icons/fa";
import { star } from "../assets/icons";
function ReviewsCard({ item }) {
  return (
    <div className=" bg-white rounded-lg my-4 mx-2">
      <p className="text-lg text-gray-700 py-4 px-6">
        <FaQuoteLeft className="text-3xl mt-n4 me-3" />
        {item.reviewComment}
      </p>
      <div className="flex items-center px-6 pb-4">
        <img
          className="w-16 h-16 rounded-full"
          src={item.imgURL}
          alt={`testimonial-img`}
        />
        <div className="pl-4">
          <h5 className="text-xl font-semibold">{item.customerName}</h5>
          <span className="text-coral-red flex items-center">
            <img src={star} alt="rating icon" className="w-4 h-4 me-2 " />{" "}
            {item.rating}
          </span>
          <span className="text-gray-600">{item.feedback}</span>
        </div>
      </div>
    </div>
  );
}

export default ReviewsCard;
