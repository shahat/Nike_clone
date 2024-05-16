import { star } from "../assets/icons";

const PopularProductCard = ({ product }) => {
  console.log("Product : ", product);
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={product.imgURL} alt={product.name} className="w-[282px] " />

      <div className="mt-2 md:mt-8 flex justify-start items-center gap-2.5">
        <img src={star} alt="rating icon" className="w-5 h-5" />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          ({product.rating})
        </p>
      </div>
      <h3 className="mt-2 text-l sm:text-2xl leading-normal font-semibold font-palanquin">
        {product.name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red sm:text-xl leading-normal">
        {product.price}
      </p>
    </div>
  );
};

export default PopularProductCard;
