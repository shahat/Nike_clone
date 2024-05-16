import React from "react";
import { services } from "../constants/constants";
import { ServiceCard } from "../components";
const Services = () => {
  return (
    <section className="grid  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-12">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
