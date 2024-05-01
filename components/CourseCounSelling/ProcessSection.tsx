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
      {/* <img
        className="rounded-full w-15 h-10"
        src={profileImageUrl}
        alt="profile picture"
      /> */}
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
    quote:
      "Explore your interests and strengths to find the perfect academic pathway.",
    profileImageUrl: "/assets/process.svg",
    authorImage: "/assets/guide.svg",
    authorName: "Course Counselor",
    title: "Personalized Guidance",
  },
  {
    quote:
      "Discover a diverse range of courses tailored to your career aspirations.",
    profileImageUrl: "/assets/process.svg",
    authorImage: "/assets/guide.svg",
    authorName: "Course Counselor",
    title: "Course Exploration",
  },
  {
    quote:
      "Develop a comprehensive plan outlining your academic journey and goals.",
    profileImageUrl: "/assets/process.svg",
    authorImage: "/assets/guide.svg",
    authorName: "Course Counselor",
    title: "Educational Planning",
  },
  {
    quote:
      "Benefit from decades of experience and expertise in guiding students towards success.",
    profileImageUrl: "/assets/process.svg",
    authorImage: "/assets/expert.svg",
    authorName: "Experienced Mentor",
    title: "Guidance & Support",
  },
];

const ProcessSection = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 py-4 px-2 mx-auto max-w-screen-xl lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 mb-8  md:mb-12">
          <div className="text-black">
            <p
              style={{ letterSpacing: "7px" }}
              className="text-white uppercase bg-[#4EAF4E] my-4  px-3 rounded-lg w-/12"
            >
              Course Counseling
            </p>
            <h1 className="text-3xl my-4 font-bold">
              Guiding You Through Your Educational Journey
            </h1>
            <p className="text-[#595566] my-4 ">
              Our course counseling process is designed to provide you with
              clear steps to achieve your educational goals. We'll help you
              navigate the diverse range of academic options and find the
              perfect fit for your aspirations.
            </p>
            <hr className="mt-4 border-gray-400 border-t-2"></hr>
            <div className="flex my-4 space-x-8">
              <div>
                <p className="bg-[#FFCC4A] flex justify-center items-center  text-center align-middle w-14 h-14 rounded-full">
                  1
                </p>
              </div>
              <div>
                <p className="font-semibold text-xl">Explore Your Interests</p>
                <p>
                  Our first step involves understanding your interests,
                  strengths, and career aspirations to guide you towards
                  suitable academic pathways.
                </p>{" "}
              </div>
            </div>
            <hr className="mt-4 border-gray-400 border-t-2"></hr>
            <div className="flex my-4 space-x-8">
              <div>
                <p className="bg-[#4EAF4E] text-white flex justify-center items-center  text-center align-middle w-14 h-14 rounded-full">
                  2
                </p>
              </div>
              <div>
                <p className="font-semibold text-xl">
                  Explore Available Courses
                </p>
                <p>
                  Next, we'll explore the diverse range of courses available to
                  you, considering factors such as program content, duration,
                  and career prospects.
                </p>{" "}
              </div>
            </div>
            <hr className="mt-4 border-gray-400 border-t-2"></hr>
            <div className="flex my-4 space-x-8">
              <div>
                <p className="bg-[#4EAF4E] text-white flex justify-center items-center  text-center align-middle w-14 h-14 rounded-full">
                  3
                </p>
              </div>
              <div>
                <p className="font-semibold text-xl">
                  Plan Your Educational Journey
                </p>
                <p>
                  With our guidance, you'll develop a comprehensive plan
                  outlining your academic path, including course selection,
                  timeline, and any additional requirements.
                </p>{" "}
              </div>
            </div>
          </div>

          <div className="text-black">
            {" "}
            <p
              style={{ letterSpacing: "7px" }}
              className="text-black uppercase bg-[#FFCC4A] my-4  px-3 rounded-lg w-10/12"
            >
              Partnering for Success
            </p>
            <h1 className="text-3xl font-bold my-4 ">
              Experience and Expertise
            </h1>
            <p className="text-[#595566]">
              Benefit from our decades of experience in guiding students towards
              successful educational journeys. We understand the evolving
              landscape of academia and are committed to helping you thrive.
            </p>
            <p className="text-[#595566] my-2">
              Our approach integrates agile frameworks to provide you with a
              clear roadmap for success. We foster collaborative thinking and
              iterative strategies to ensure your educational goals are met.
            </p>
            <div className="grid grid-cols-1  lg:grid-cols-2 gap-16 mb-8  md:mb-12 ">
              {cardsData.map((card, index) => (
                <Card key={index} {...card} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProcessSection;
