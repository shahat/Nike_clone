import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import {
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
  CustomerReviews,
  Footer,
} from "./sections";
import { Nav } from "./components";
function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      {/* ========== Super Quality Section   ========== */}
      <section className="padding">
        <SuperQuality />
      </section>
      {/* ========== Service Section         ========== */}
      <section className="padding">
        <Services />
      </section>
      {/* ========== SpecialOffer Section    ========== */}
      <section className="padding">
        <SpecialOffer />
      </section>

      {/* ========== CustomerReviews Section ========== */}
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>

      {/* ========== Subscribe Section ========== */}
      <section className="padding-x sm:py-32 py-16 w-full ">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}

export default App;
