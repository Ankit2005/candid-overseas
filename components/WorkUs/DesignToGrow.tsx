interface CardProps {
  quote: string;
  profileImageUrl: string;
  quoteAuthor: string;
  authorImage: string;
  authorName: string;
  title: string;
}

const Card: React.FC<CardProps> = ({
  quote,
  profileImageUrl,
  quoteAuthor,
  authorImage,
  authorName,
  title,
}) => {
  return (
    <figure className=" flex flex-col items-center justify-center  p-8 bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
      <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
        <img
          className="rounded-full w-15 h-[35px]"
          src={profileImageUrl}
          alt="profile picture"
        />
        <h1 className="text-2xl my-2">{title}</h1>
        <p className="my-4">{quote}</p>
        <button
          type="button"
          className="text-[#0B63E5] bg-[#FFFFFF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </blockquote>

      <figcaption className="flex items-center justify-center space-x-3"></figcaption>
    </figure>
  );
};

const cardsData = [
  {
    quote:
      "Benefit from our team's extensive experience, providing students with unmatched guidance in navigating the complexities of international work visas.",
    profileImageUrl: "/assets/designtogrow1.svg",
    quoteAuthor: "Bonnie Green",
    authorImage: "/assets/learnman.svg",
    authorName: "Bonnie Green",
    title: "Seasoned Experts",
  },
  {
    quote:
      "We understand that each student's journey is unique; hence, our consultants offer personalized solutions to align with your specific career aspirations.",
    profileImageUrl: "/assets/designtogrow1.svg",
    quoteAuthor: "Bonnie Green",
    authorImage: "/assets/learnman.svg",
    authorName: "Bonnie Green",
    title: "Personalized Approach",
  },
  {
    quote:
      "Join a community of successful individuals who have trusted us with their work visa journey, and witness your dreams turning into reality.",
    profileImageUrl: "/assets/designtogrow1.svg",
    quoteAuthor: "Bonnie Green",
    authorImage: "/assets/learnman.svg",
    authorName: "Bonnie Green",
    title: "Success Stories",
  },
  // Add more card data as needed
];

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 mb-8  md:mb-12"></div>;
const DesignToGrow = () => {
  return (
    <>
      <section className="bg-center p-0 sm:p-8 w-full lg:p-32  bg-no-repeat bg-designToGrow flex flex-col justify-center lg:items-start lg:justify-start dark:bg-gray-900">
        <div className="py-4 px-2 mx-auto max-w-screen-xl lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3     lg:grid-cols-3 gap-4 mb-8  rounded-2xl shadow-sm  md:mb-12">
            <div className="flex justify-center">
              <img
                className="rounded-full h-3/4 items-center"
                src="/assets/design1.svg"
                alt="profile picture"
              />
            </div>

            <p className="text-white text-3xl lg:text-4xl w-full ">
              Partner with the Leading Work Visa Consultants for Indian Students
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8  rounded-2xl shadow-sm  md:mb-12">
            {cardsData.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default DesignToGrow;
