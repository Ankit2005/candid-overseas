interface CardProps {
  quote: string;
  profileImageUrl: string;

  authorImage: string;
  authorName: string;
  title: string;
}

const Card: React.FC<CardProps> = ({
  quote,
  profileImageUrl,

  authorImage,
  authorName,
  title,
}) => {
  return (
    <div className="p-4 rounded-xl box-border border-white-500 shadow-lg">
      <img
        className="rounded-full w-15 h-10"
        src={profileImageUrl}
        alt="profile picture"
      />
      <p className="font-bold text-xl my-2">{title}</p>
      <p className="text-[#595566]">{quote}</p>
    </div>

    //   <figure className=" flex flex-col items-center justify-center  p-8 bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
    //     <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
    //       <img className="rounded-full w-15 h-[35px]" src={profileImageUrl} alt="profile picture" />
    //       <h1 className="text-2xl my-2">{title}</h1>
    //       <p className="my-4">{quote}</p>

    //     </blockquote>

    //     <figcaption className="flex items-center justify-center space-x-3"></figcaption>
    //   </figure>
  );
};
const cardsData = [
  {
    title: "Tailored Guidance",
    profileImageUrl: "/assets/process.svg",

    authorImage: "/assets/learnman.svg",
    authorName: "Bonnie Green",
    quote: "Receive personalized guidance crafted to your business aspirations",
  },
  {
    title: "Global Network",
    profileImageUrl: "/assets/process.svg",

    authorImage: "/assets/learnman.svg",
    authorName: "Bonnie Green",
    quote:
      "Access our vast network for essential insights and connections to kickstart your business.",
  },
  {
    title: "Proven Track Record",
    profileImageUrl: "/assets/process.svg",

    authorImage: "/assets/learnman.svg",
    authorName: "Bonnie Green",
    quote:
      "Helping entrepreneurs successfully navigate the complexities of global business visas.",
  },
  {
    quote:
      "From documentation to legal formalities, we provide end-to-end support.",
    profileImageUrl: "/assets/process.svg",

    authorImage: "/assets/learnman.svg",
    authorName: "Bonnie Green",
    title: "Dedicated Support",
  },

  // Add more card data as needed
];
const Process = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 py-4 px-2 mx-auto max-w-screen-xl lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 mb-8  md:mb-12">
          <div className="text-black">
            <p
              style={{ letterSpacing: "7px" }}
              className="text-white uppercase bg-[#4EAF4E] my-4  px-2 rounded-lg w-3/12"
            >
              Proccess
            </p>
            <h1 className="text-3xl font-bold my-4 ">
              Candid Business Visa Consultancy Services
            </h1>
            <p className="text-[#595566] my-6">
              Our Business Visa Consultancy Services are designed to empower
              Indian entrepreneurs with the knowledge and assistance needed to
              turn their global business dreams into reality. We offer three key
              services tailored to your specific needs.
            </p>
            <hr className="mt-4 border-gray-400 border-t-2"></hr>
            <div className="flex my-4 space-x-8">
              <div>
                <p className="bg-[#FFCC4A] flex justify-center items-center  text-center align-middle w-14 h-14 rounded-full">
                  1
                </p>
              </div>
              <div>
                <p className="font-semibold text-xl">
                  Business Visa Eligibility Assessment
                </p>
                <p>
                  Evaluate your eligibility for a business visa with our
                  thorough assessment, ensuring a strong foundation for your
                  application.
                </p>{" "}
              </div>
            </div>
            <hr className="mt-4 border-gray-400 border-t-2"></hr>
            <div className="flex my-4 space-x-8">
              <div>
                <p className="bg-[#4EAF4E] flex justify-center items-center text-white text-center align-middle w-14 h-14 rounded-full">
                  2
                </p>
              </div>
              <div>
                <p className="font-semibold text-xl">
                  Documentation Assistance
                </p>
                <p>
                  Streamline the documentation process with our expert
                  assistance, reducing the risk of errors and delays.
                </p>{" "}
              </div>
            </div>
            <hr className="mt-4 border-gray-400 border-t-2"></hr>
            <div className="flex my-4 space-x-8">
              <div>
                <p className="bg-[#4EAF4E] flex justify-center items-center text-white text-center align-middle w-14 h-14 rounded-full">
                  3
                </p>
              </div>
              <div>
                <p className="font-semibold text-xl">
                  Guided Application Process
                </p>
                <p>
                  Navigate the complex application process confidently with our
                  step-by-step guidance, enhancing your chances of a successful
                  visa approval.
                </p>{" "}
              </div>
            </div>
          </div>

          <div className="text-black">
            {" "}
            {/* <p className="text-black bg-[#FFCC4A] py-3 px-1 rounded-lg w-2/4 md:w-4/5 lg:w-2/4">
              Growing with our clients
            </p> */}
            <p
              style={{ letterSpacing: "7px" }}
              className="text-black uppercase bg-[#FFCC4A]  my-4 px-2 rounded-lg w-12/12"
            >
              Expertise, Dedication, and Success
            </p>
            <h1 className="text-3xl font-bold my-4 ">
              Why Partner with Us for Your Business Visa Journey?
            </h1>
            <p className="text-[#595566]">
              The international business venture requires careful guidance and
              expertise. At Candid, we take pride in being the preferred choice
              for Indian entrepreneurs seeking to establish businesses abroad.
              Our team of seasoned business visa consultants is dedicated to
              ensuring your success, offering unparalleled support at every step
              of the journey
            </p>
            <div className="grid grid-cols-1  lg:grid-cols-2 gap-16 mb-8  md:mb-12 ">
              {cardsData.map((card, index) => (
                <Card key={index} {...card} />
              ))}
            </div>
          </div>
          {/* {cardsData.map((card, index) => (
            <Card key={index} {...card} />
          ))} */}
        </div>
      </section>
    </>
  );
};
export default Process;
