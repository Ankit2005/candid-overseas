// ServiceCards.tsx
import React from "react";

const ServiceCards: React.FC = () => {
  const services = [
    {
      title: "Proven Track Record",
      description:
        "Rely on our success stories — a testament to our expertise in successfully securing student visas for aspiring Indian students.",
    },
    {
      title: "Personalized Support",
      description:
        "Experience dedicated support as we walk hand-in-hand with you, addressing your concerns and ensuring a stress-free visa application process.",
    },
    {
      title: "Comprehensive Services",
      description:
        "From documentation to interview preparation, we offer end-to-end services, leaving no stone unturned in your journey towards global education.",
    },
    {
      title: "Transparent Process",
      description:
        "Navigate your visa application with confidence through our transparent and streamlined process, providing clarity at every step.",
    },
  ];

  return (
    <div className="container mx-auto my-2 md:my-6 p-4">
      <p
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="2000"
        className="text-lg text-center text-lightPurple"
      >
        Services
      </p>
      <h4
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="2000"
        className="text-3xl text-center text-secondaryText font-bold mt-2 mb-4"
      >
        Why Choose Our Visa Consulting Services?
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration={index * 400}
            className={`p-6 rounded-lg shadow-lg ${
              index % 4 === 0 || index % 4 === 3 // Use index % 4 to determine the pattern
                ? "bg-lightBlue text-grey-400"
                : "bg-mediumRed text-grey-400"
            }`}
          >
            <div
              className={` ${
                index % 4 === 0 || index % 4 === 3 // Use index % 4 to determine the pattern
                  ? "text-darkBlueNav border-l-4 border-darkBlueNav"
                  : "text-redHeading border-l-4 border-redHeading "
              } pl-2`}
            >
              <h2 className="text-lg font-semibold">{service.title}</h2>
            </div>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
