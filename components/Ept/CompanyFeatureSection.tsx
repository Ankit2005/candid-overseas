import Image from "next/image";
import React from "react";

interface CompanyFeature {
  title: string;
  description: string;
}

const companyFeatures: CompanyFeature[] = [
  {
    title: "Expertise",
    description:
      "Our EPT Expert consultants bring a wealth of experience, ensuring you're well-prepared for the linguistic challenges of the EPT.",
  },
  {
    title: "Personalized Approach for Optimal Results",
    description:
      "We understand that each student is unique. Our tailored strategies and one-on-one support guarantee a personalized journey to language proficiency and success in the EPT",
  },
];

const CompanyFeatureSection: any = ({ data, title }: any) => {
  return (
    <section className="bg-center p-0 sm:p-8 lg:p-32 bg-companyFeature bg-no-repeat  dark:bg-gray-900">
      <div className="mx-4">
        <h4
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="1200"
          className=" text-2xl text-center text-white font-bold  mb-4"
        >
          {title}
        </h4>

        <div className="flex flex-col  md:flex-row justify-center space-x-0 md:space-x-4 my-4 md:my-1">
          {data &&
            data.map((feature: any, index: number) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration={900 * index}
                className="bg-white p-4 rounded-lg shadow-lg mt-4 w-auto max-w-sm"
              >
                <Image
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration={1000 * index}
                  src="/assets/mechanic.svg"
                  alt="mechanic"
                  width={48} // Set your desired width here
                  height={48} // Set your desired height here
                  className="bg-bgBlue p-3 rounded-full my-3"
                />

                <h4
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration={index * 400}
                  className="text-xl text-black font-semibold my-2"
                >
                  {feature.title}
                </h4>
                <ul className="list-disc text-secondaryText ml-4">
                  <li
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-duration={index * 600}
                  >
                    {feature.description}
                  </li>
                </ul>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyFeatureSection;
