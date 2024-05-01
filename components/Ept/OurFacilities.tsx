import Image from "next/image";
import React from "react";

interface FacilityProps {
  imageSrc: string;
  title: string;
  key: number;
}

const FacilityItem: React.FC<FacilityProps> = ({ key, imageSrc, title }) => (
  <div
    data-aos="fade-up"
    data-aos-anchor-placement="bottom-bottom"
    data-aos-duration={key * 300}
    className="flex my-4 space-x-4"
    key={`facility_card_${key}`}
  >
    {/* Left side SVG */}
    <div>
      <Image
        src={imageSrc}
        alt="cube"
        width={56} // Set your desired width here
        height={56} // Set your desired height here
        className="h-9-e w-9-e"
      />
    </div>

    {/* Right side content */}
    <div>
      <h3 className="text-lg text-grey-300 ">{title}</h3>
    </div>
  </div>
);

const OurFacilities: React.FC = () => {
  const facilitiesData: FacilityProps[] = [
    {
      key: 1,
      imageSrc: "/assets/four_square.svg",
      title:
        "EPT consultants evaluate students' language skills and academic goals, laying the foundation for personalized guidance.",
    },
    {
      key: 2,
      imageSrc: "/assets/two_square.svg",
      title:
        "Tailored study plans are crafted to address individual learning needs and exam requirements, employing effective strategies for preparation.",
    },
    {
      key: 3,
      imageSrc: "/assets/contact_three_person.svg",
      title:
        "Consultants provide continuous support, offering resources, practice materials, and feedback to empower students for exam success and international academic pursuits.",
    },
    // Add more facility items here as needed
  ];

  return (
    <div className="flex flex-col md:flex-row p-6">
      {/* Left side with image */}
      <div className="md:w-1/2">
        <Image
          src="/assets/person_image.svg"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="800"
          alt="Your Image"
          width={500} // Set your desired width here
          height={320} // Set your desired height here
          //className="w-full h-64"
        />
      </div>

      {/* Right side with content */}
      <div className="md:w-1/2 p-8">
        {/* <p
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="800"
          className="text-xl text-lightPurple "
        >
          Our Facilities
        </p> */}
        <h2
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="900"
          className="text-2xl text-secondaryText font-bold"
        >
          Why You Need an EPT Test Consultant?
        </h2>

        {/* Facility items */}
        {facilitiesData.map((facility, index) => (
          <FacilityItem
            key={index}
            imageSrc={facility.imageSrc}
            title={facility.title}
          />
        ))}
      </div>
    </div>
  );
};

export default OurFacilities;
