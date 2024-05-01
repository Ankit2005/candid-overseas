import Image from "next/image";
import React from "react";

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
          <h1
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="2000"
            className="text-3xl font-bold mb-4 "
          >
            Australia Immigration Consultation
          </h1>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="2000"
            className="text-lg mb-4 text-justify"
          >
            Get expert guidance for a seamless migration to Australia with our
            immigration consultation services. Whether you're pursuing skilled
            migration or reuniting with family, our consultants will simplify
            the complexities of Australian immigration laws. Rely on us to make
            your dream of living in Australia a straightforward reality.
          </p>
          {/* <a
            data-aos="fade-up"
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
          </a> */}
        </div>
      </div>
      <div className="container mx-a  uto p-4 flex flex-col-reverse md:flex-row items-center justify-center ">
        <div className="md:w-1/2 ">
          <h1
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="2000"
            className="text-3xl font-bold mb-4"
          >
            New Zealand Immigration Guidance
          </h1>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="2000"
            className="text-lg mb-4 text-justify"
          >
            Embark on your Kiwi journey with our specialized New Zealand
            immigration consultation services. Our consultants possess in-depth
            knowledge of New Zealand's immigration processes, offering
            personalized guidance aligned with your aspirations. Whether you're
            pursuing skilled migration, study visas, or other pathways, we
            provide expert support tailored to your needs.
          </p>
          {/* <a
            data-aos="fade-up"
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
          </a> */}
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
