import Image from "next/image";
import React from "react";

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({
  name,
  role,
  imageUrl,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col items-center p-4 md:w-1/3">
      <Image
        data-aos="zoom-in"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="1400"
        src="/assets/person_image.svg"
        alt="Your Image"
        width={1000}
        height={1000} // Set your desired height here
        className="mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-600 text-center">{role}</p>
    </div>
  );
};

const Team: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold text-gray-800 text-center">
        Meet Our Team
      </h1>
      <h2 className="text-3xl text-black-500 text-center mt-4">
        Meet the experts who are passionate about guiding you through every step
        of your global education journey.
      </h2>

      <div className="flex flex-col md:flex-row justify-center mt-8 space-y-4 md:space-y-0 md:space-x-4">
        {/* Card 1 */}
        <TeamMemberCard
          name="Raj Bharwad"
          role=""
          imageUrl="/assets/person_image.svg"
        />

        {/* Card 2 (Duplicate structure for additional cards) */}
        {/* <TeamMemberCard
          name=""
          role=""
          imageUrl="/assets/person_image.svg"
        /> */}

        {/* Card 3 (Duplicate structure for additional cards) */}
      </div>
    </div>
  );
};

export default Team;
