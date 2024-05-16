const ReviewsButton = ({ icon, order, onClick, customStyle }) => {
  console.log("style : ", customStyle);
  return (
    <div className={`${order} w-1/2 p-3 `}>
      <div
        className={`cursor-pointer  flex ${customStyle ? customStyle : ""}`}
        onClick={onClick}
      >
        <span className="text-2xl flex justify-center items-center align-center  bg-coral-red text-white rounded-full w-[50px] h-[50px]">
          {icon}
        </span>
      </div>
    </div>
  );
};

export default ReviewsButton;
