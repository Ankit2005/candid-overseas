// ServiceCards.tsx
import React from "react";

const ServicesVisa: React.FC = () => {
  const services = [
    {
      title: "Visa Eligibility Assessment",
      description:
        "Ensure a smooth start by assessing your eligibility for an investor visa. Our experts analyze your financial portfolio and investment goals, providing insights that pave the way for a successful application.",
    },
    {
      title: "Customized Investment Plans",
      description:
        "Based on your unique financial objectives, our consultants craft personalized investment plans. From selecting the right investment avenues to optimizing returns, we guide you towards choices that align with your aspirations.",
    },
    {
      title: "Documentation Assistance",
      description:
        "Our team ensures your documentation is flawless, minimizing the risk of delays or rejections. From financial statements to legal paperwork, we've got you covered.",
    },
    {
      title: "Ongoing Support",
      description:
        "Beyond obtaining the visa, our commitment continues. Enjoy ongoing support as you navigate the nuances of international investments. Whether it's adapting to regulatory changes or optimizing your portfolio, we're by your side.",
    },

    // Add more services as needed
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
        Candid Investor Visa Consultation Services
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

export default ServicesVisa;
