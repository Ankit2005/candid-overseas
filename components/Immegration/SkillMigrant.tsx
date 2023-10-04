import Image from 'next/image';
import React from 'react';

const SkillMigrant: React.FC = () => {
  return (
    <div className="bg-[#0E149D] text-white">

    <div className="container mx-auto p-4 flex flex-col-reverse md:flex-row items-center justify-center  ">
    <div className="md:w-1/2  md:pr-8 mb-4 md:mb-0  relative group">
    <Image
   
  src="/assets/skill_migrant.svg"
  alt="Your Image"
  layout="responsive"
  width={500} // Set your desired width here
  height={400} // Set your desired height here
  className="rounded-lg transition duration-300 ease-in-out transform group-hover:scale-105"
/>
                
            </div>
            <div className="md:w-1/2 ">
                <h1   data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="2000" className="text-3xl font-bold mb-4 ">Skilled Migrant Category</h1>
                <p   data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="2000" className="text-lg mb-4">If you have skills, qualifications or experience that New Zealand needs you may be able to apply for a resident visa under the Skilled Migrant Category.The Skilled Migrant Category is a points system based on factors such as age, work experience, your qualifications, and an offer of skilled employment. You must also be aged 55 or under, and meet English language, health, and character requirements.</p>
                <a   data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="2000"
                href="#"
                className="border btn-primary inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-md my-10 "
              >
                Learn more
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
        </div>
        <div className="container mx-a  uto p-4 flex flex-col-reverse md:flex-row items-center justify-center ">
    
            <div className="md:w-1/2 ">
                <h1   data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="2000" className="text-3xl font-bold mb-4">Skilled Migrant Category</h1>
                <p   data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="2000" className="text-lg mb-4">If you have skills, qualifications or experience that New Zealand needs you may be able to apply for a resident visa under the Skilled Migrant Category.The Skilled Migrant Category is a points system based on factors such as age, work experience, your qualifications, and an offer of skilled employment. You must also be aged 55 or under, and meet English language, health, and character requirements.</p>
                <a   data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="2000"
                href="#"
                className="border btn-primary inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-md my-10 "
              >
                Learn more
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
            <div className="md:w-1/2      md:pr-8 mb-4 md:mb-0 relative group">
            <Image
           
  src="/assets/skill_migrent_two.svg"
  alt="Your Image"
  layout="responsive"
  width={500} // Set your desired width here
  height={400} // Set your desired height here
  className="rounded-lg transition duration-300 ease-in-out transform group-hover:scale-105"
/>

            </div>
        </div>
    </div>
  );
};

export default SkillMigrant;
