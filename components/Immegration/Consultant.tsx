import React from 'react';

const Consultant: React.FC = () => {
  return (
    <div className="bg-lightRed text-secondaryText">
      <div className="container mx-auto p-4 flex flex-col-reverse md:flex-row items-center justify-center">
        {/* Left side - Image */}
        <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0 relative group">
          <img
            src="/assets/consultant_image.svg"
            alt="Your Image"
            className="w-full h-full "
          />
        </div>

        {/* Right side - Heading and Paragraphs */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">New Zealand – New Zealand Immigration Consultants</h1>
          <p className="text-lg text-grey-300 mb-4">
          Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. 


          </p>
          <p className="text-lg text-grey-300">
          Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Consultant;
