import React from 'react';

interface FacilityProps {
  imageSrc: string;
  title: string;

}

const FacilityItem: React.FC<FacilityProps> = ({ imageSrc, title }) => (
  <div className="flex my-4 space-x-4">
    {/* Left side SVG */}
    <div>
      <img src={imageSrc} alt="cube" className="h-9 w-9" />
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
      imageSrc: '/assets/four_square.svg',
      title: 'Teachers don’t get lost in the grid view Have a dedicated Podium space.',
      
    },
    {
        imageSrc: '/assets/two_square.svg',
        title: 'Teachers don’t get lost in the grid view Have a dedicated Podium space.',
       
      },
      {
        imageSrc: '/assets/contact_three_person.svg',
        title: 'Teachers don’t get lost in the grid view Have a dedicated Podium space.',
       
      },
    // Add more facility items here as needed
  ];

  return (
    <div className="flex flex-col md:flex-row">
      {/* Left side with image */}
      <div className="md:w-1/2">
        <img src="/assets/person_image.svg" alt="Your Image" className="w-full h-64 " />
      </div>

      {/* Right side with content */}
      <div className="md:w-1/2 p-8">
        <p className="text-xl text-lightPurple ">Our Facilities</p>
        <h2 className="text-2xl text-secondaryText font-bold">We provide a full range of global logistics solutions.</h2>

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
