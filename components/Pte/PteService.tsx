// ServiceCards.tsx
import React from "react";

const PteService: React.FC = () => {
  const services = [
    {
      title: "Expert Professionals",
      description:
        "Benefit from the guidance of experienced tutors who understand the nuances of the PTE exam, ensuring targeted improvement in your weak areas.",
    },
    {
      title: "Flexible Schedule",
      description:
        "Our flexible schedules cater to the diverse needs of students, providing convenience without compromising the quality of instruction.",
    },
    {
      title: "Resourceful Learning",
      description:
        "Gain access to a wide variety of study materials, practice tests, and resources to ensure a thorough preparation for the PTE exam.",
    },
    {
      title: "Mock Tests and Performance Analysis",
      description:
        "Sharpen your exam-taking skills through regular mock tests, coupled with detailed performance analysis to identify areas of improvement.",
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
        Choose Excellence, Choose Us
      </p>
      <h4
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="2000"
        className="text-3xl text-center text-secondaryText font-bold mt-2 mb-4"
      >
        Unparalleled Advantages That Set Us Apart
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

export default PteService;
