import React from 'react';

interface CardData {
  logoUrl:string
,  title: string;
  heading:string;
  description: string;
}

const cardData: CardData[] = [
  {
    logoUrl: '/assets/bulb.svg',
    title: 'STRATEGY',
    heading:"Student Visa",
    description:
      'Companies bring in consultants when they have problems they can’t solve on challenge.',
  },
  {
    logoUrl: '/assets/bulb.svg',
    title: 'ANOTHER TITLE',
    heading:"Visitor Visa",
    description:
      'Another description for this card. You can add more card data as needed.',
  },
  {
    logoUrl: '/assets/bulb.svg',
    title: 'STRATEGY',
    heading:"Dependent Visa",
    description:
      'Companies bring in consultants when they have problems they can’t solve on challenge.',
  },

  {
    logoUrl: '/assets/bulb.svg',
    title: 'STRATEGY',
    heading:"Dependent Visa",
    description:
      'Companies bring in consultants when they have problems they can’t solve on challenge.',
  },

  // Add more card data as needed
];

const GetBenefit: React.FC = () => {
  return (
    <div className='bg-lightRed'>

    <div className="container py-4 grid grid-cols-1 md:grid-cols-2">
      {/* Right side section */}
      <div className=" rounded-lg  p-6 mx-auto md:w-2/ lg:w-auto ">
        {/* Heading */}
        <h1 className="text-3xl text-black-500 font-bold mb-4">
        Get benifits & work  </h1>
        <h1 className="text-3xl text-black-500 font-bold mb-4">about product designer</h1>

       

        {/* Paragraph */}
        <p className="text-gray-700">
          Leverage agile frameworks to provide a robust synopsis for strategy,
          foster collaborative thinking to further the overall value
          proposition. Organically grow the holistic world view of disruptive
          innovation via workplace diversity and empowerment.
        </p>

        <a
        href="#"
        className="border btn-primary inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-md my-10 ml-8"
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

      {/* Left side section */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        {/* Map over the cardData array to generate cards */}
        {cardData.map((card, index) => (
          <div
            key={index}
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="bg-white mx-auto max-w-md">
              <div className="flex justify-between">
                {/* Left Side (Icon) */}
                <div className="w-1/6">
                <img src={card.logoUrl} alt={card.title} className="w-8 h-8 mb-4" />
                </div>

                {/* Right Side (Heading) */}
                <div className="pl-4">
                  <p className="text-lg text-[#527CEB] font-semibold">
                    {card.title}
                  </p>
                </div>
              </div>
            </div>
            {/* Divider */}
            <hr className="my-4 border-gray-300" />

            <div className="my-2">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {card.heading}:
              </h5>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default GetBenefit;
