import Image from "next/image";

const QualityService = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 py-4 px-2 mx-auto max-w-screen-xl lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 shadow-2xl my-5">
          <div className="my-5">
            <h1 className="text-primary text-3xl my-4">
              Elevate Your Journey to Permanent Residency
            </h1>
            <p className="text-secondaryText text-justify">
              Experience a seamless transition to permanent residency with
              Candid PR Consultancy. Our dedicated team simplifies the
              complexities of PR visa processes, offering personalized guidance
              and unwavering support at every step. From initial assessments to
              application submission, we are committed to turning your dream of
              global residency into a straightforward reality. With our proven
              track record and client-centric approach, we maximize your chances
              of securing a Permanent Residency (PR) visa.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4  my-5">
              <div className="flex items-start space-x-4">
                <Image
                  src="/assets/rightinnertick.svg"
                  alt="Your Image"
                  width={30}
                  height={30}
                />
                <p className="text-primary text-lg text-justify">
                  Receive tailored advice and support based on your unique
                  circumstances and goals.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <Image
                  src="/assets/rightinnertick.svg"
                  alt="Your Image"
                  width={30}
                  height={30}
                />
                <p className="text-primary text-lg text-justify">
                  Stay informed throughout the entire PR visa process with
                  regular updates and clear communication.
                </p>
              </div>
              <div className="flex items-start space-x-4 my-3">
                <Image
                  src="/assets/rightinnertick.svg"
                  alt="Your Image"
                  width={30}
                  height={30}
                />
                <p className="text-primary text-lg text-justify">
                  Benefit from our extensive experience and successful track
                  record in assisting clients with PR visa applications.
                </p>
              </div>
              <div className="flex items-start space-x-4 my-3">
                <Image
                  src="/assets/rightinnertick.svg"
                  alt="Your Image"
                  width={30}
                  height={30}
                />
                <p className="text-primary text-lg text-justify">
                  Receive personalized and dedicated support from our team of
                  experienced immigration consultants throughout your PR
                  journey.
                </p>
              </div>
            </div>
            <a
              href="#"
              className="border btn-primary inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-md my-4 ml-8"
            >
              Learn More
              <svg
                className="w-3.5 h-3.5 ml-2"
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
          <div>
            <Image
              src="/assets/pr.jpg"
              alt="Your Image"
              width={600}
              height={400}
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default QualityService;
