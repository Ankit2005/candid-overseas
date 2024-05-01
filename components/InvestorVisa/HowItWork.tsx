import Image from "next/image";

const HowItWork = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 py-4 px-2 mx-auto max-w-screen-xl lg:py-16">
        <div>
          <h1 className="text-black font-bold text-2xl my-2">
            Overview of our investor visa service{" "}
          </h1>
          <p className="text-[#666C89]">
            Begin your journey to global investment with our specialized
            Investor Visa Consultant service. At Candid, we understand the
            aspirations of Indian investors seeking to explore foreign markets.
            Our comprehensive service is designed to streamline the complex
            process of obtaining an investor visa, ensuring a seamless
            transition into international investment landscapes.
          </p>
        </div>

        <hr className="mt-4 border-gray-200 border-t-2"></hr>
        <div className="lg:flex">
          <div className="w-full lg:w-6/12 px-4 ">
            <div className="bg-white p-4">
              <Image
                src="/assets/howiswork.svg"
                className=" rounded-md"
                width={500}
                height={200}
                alt="candid logo"
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-1 ">
            <div>
              <div className="bg-white pt-4 text-[#666C89] flex  justify-start">
                <h1 className="text-black  font-bold text-xl">
                  Why an Investor Visa is important
                </h1>
              </div>
              <div className="text-[#666C89] my-3 text-justify">
                <p text-black font-bold text-xl>
                  In the dynamic landscape of global investment, having an
                  investor visa is not just a formality; it's a strategic
                  necessity. It opens doors to opportunities that would
                  otherwise remain inaccessible. Our Investor Visa Consultants
                  guide you through the intricate application process, ensuring
                  your journey is marked by ease and efficiency.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-white pt-4 text-[#666C89] flex  justify-start">
                <h1 className="text-black  font-bold text-xl">
                  Access to Premier Education
                </h1>
              </div>
              <div className="text-[#666C89] my-3 text-justify">
                <p text-black font-bold text-xl>
                  A pivotal advantage of securing an investor visa is the access
                  it provides to world-class educational institutions. Whether
                  it's prestigious business schools or cutting-edge research
                  facilities, your investor visa opens the doors to excellence.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-white pt-4 text-[#666C89] flex  justify-start">
                <h1 className="text-black  font-bold text-xl">
                  Potential for Work Experience
                </h1>
              </div>
              <div className="text-[#666C89] my-3 text-justify">
                <p text-black font-bold text-xl>
                  Beyond academics, an investor visa enhances your potential for
                  gaining valuable work experience in international markets.
                  It's a passport to professional growth and global networking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HowItWork;
