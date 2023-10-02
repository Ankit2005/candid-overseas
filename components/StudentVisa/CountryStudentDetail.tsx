
import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  svgUrl:string;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ name, role, imageUrl,svgUrl }) => {
  return (
<div className="lg:flex">
  <div className="lg:w-1/2 md:w-1/2 w-full max-w-md p-4">
    <div className="h-full flex flex-col overflow-hidden border border-gray-300 rounded-lg relative">
      <div className="relative">
        {/* <!-- Image --> */}
        <img className="w-full h-64 md:h-48 object-cover" src={imageUrl} alt="Image Alt Text" />
        {/* <!-- SVG in the top left corner --> */}
        <div className="absolute top-0 left-0 m-2 w-8 h-8 text-white fill-current">
          <img className="" src={svgUrl} alt="SVG Icon" />
        </div>
        <div className="absolute right-0 bottom-6">
          <a
            href="#"
            className="border btn-primary inline-flex justify-center items-center py-1.5 px-2 text-base font-medium text-center text-white rounded-md my-4 ml-8"
          >
            Read more
            <svg
              className="w-2.5 h-2.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-darkBlueNav text-white p-2">
        <h2 className="text-lg font-medium">{name}</h2>
      </div>
    </div>
  </div>
  {/* Second card (col-2) can be added here with the same structure */}
</div>




  );
};  

const CountryStudentDetail: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
     

      <div className="flex flex-col md:flex-row justify-center  space-y-4 md:space-y-0 md:space-x-4">
        {/* Card 1 */}
        <TeamMemberCard
          name="CANADA"
          role="Business Consultant"
          imageUrl="/assets/person_image.svg"
          svgUrl="/assets/canada_flag_img.svg"
        />
        <TeamMemberCard
          name="USA"
          role="Business Consultant"
          imageUrl="/assets/person_image.svg"
          svgUrl="/assets/canada_flag_img.svg"
        />

        {/* Card 2 (Duplicate structure for additional cards) */}
        <TeamMemberCard
          name="UNITED KINGDOM"
          role="Business Consultant"
          imageUrl="/assets/person_image.svg"
          svgUrl="/assets/canada_flag_img.svg"
        />

        {/* Card 3 (Duplicate structure for additional cards) */}
        <TeamMemberCard
          name="AUSTRALIA"
          role="Business Consultant"
          imageUrl="/assets/person_image.svg"
          svgUrl="/assets/canada_flag_img.svg"
        />
        
      </div>
    </div>
  );
};

export default CountryStudentDetail;
