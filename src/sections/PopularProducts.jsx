import { products } from "../constants/constants";
import { PopularProductCard } from "../components";
const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="header-text">
          Our
          <span className="text-coral-red"> Popular</span> Products
        </h2>
        <p className="w-full   text-center sm:text-start  font-mosterrat text-slate-gray  text-lg leading-8  mb-10">
          Experience top-notch quaility and style with our sought after
          selections Discover a world of comfort , design and value .
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 sm:gap-6 gap-10">
        {products.map((product, index) => (
          <PopularProductCard
            key={"popular_Product_" + index}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
