

import React from 'react';

interface CardProps {
  quote: string;
  profileImageUrl: string;
  quoteAuthor: string;
  authorImage: string;
  authorName: string;
  authorTitle: string;
}

const Card: React.FC<CardProps> = ({
  quote,
  profileImageUrl,
  quoteAuthor,
  authorImage,
  authorName,
  authorTitle,
}) => {
  return (
    <div className='bg-[#CEE0FA]'>

    <figure className="m-5 flex flex-col items-center justify-center w p-8 bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
      <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
        <img className="rounded-full w-9 h-11" src={profileImageUrl} alt="profile picture" />
        <p className="my-4">{quote}</p>
        <div className="flex space-x-3">
          <img className="rounded-full w-9 h-11" src={authorImage} alt="profile picture" />
          <div className="space-y-0.5 font-medium dark:text-white text-left">
            <div>{authorName}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{authorTitle}</div>
          </div>
        </div>
      </blockquote>
      <figcaption className="flex items-center justify-center space-x-3"></figcaption>
    </figure>
    </div>
  );
};

const WhatLearn: React.FC = () => {
  const cardsData = [
    {
      quote: 'Great communication and work. I\'m very happy and will continue to work with Zakirsoft',
      profileImageUrl: '/assets/quotes.svg',
      quoteAuthor: 'Bonnie Green',
      authorImage: '/assets/learnman.svg',
      authorName: 'Bonnie Green',
      authorTitle: 'Developer at Open AI',
    },
    {
        quote: 'Great communication and work. I\'m very happy and will continue to work with Zakirsoft',
        profileImageUrl: '/assets/quotes.svg',
        quoteAuthor: 'Bonnie Green',
        authorImage: '/assets/learnman.svg',
        authorName: 'Bonnie Green',
        authorTitle: 'Developer at Open AI',
      },
      {
        quote: 'Great communication and work. I\'m very happy and will continue to work with Zakirsoft',
        profileImageUrl: '/assets/quotes.svg',
        quoteAuthor: 'Bonnie Green',
        authorImage: '/assets/learnman.svg',
        authorName: 'Bonnie Green',
        authorTitle: 'Developer at Open AI',
      },
      {
        quote: 'Great communication and work. I\'m very happy and will continue to work with Zakirsoft',
        profileImageUrl: '/assets/quotes.svg',
        quoteAuthor: 'Bonnie Green',
        authorImage: '/assets/learnman.svg',
        authorName: 'Bonnie Green',
        authorTitle: 'Developer at Open AI',
      },
      {
        quote: 'Great communication and work. I\'m very happy and will continue to work with Zakirsoft',
        profileImageUrl: '/assets/quotes.svg',
        quoteAuthor: 'Bonnie Green',
        authorImage: '/assets/learnman.svg',
        authorName: 'Bonnie Green',
        authorTitle: 'Developer at Open AI',
      },
      {
        quote: 'Great communication and work. I\'m very happy and will continue to work with Zakirsoft',
        profileImageUrl: '/assets/quotes.svg',
        quoteAuthor: 'Bonnie Green',
        authorImage: '/assets/learnman.svg',
        authorName: 'Bonnie Green',
        authorTitle: 'Developer at Open AI',
      },

    // Add more card data as needed
  ];

  return (
    <>
      <section className="bg-white dark:bg-gray-900 py-4 px-2 mx-auto max-w-screen-xl lg:py-16">
        <h1 className="text-center text-secondaryText">What do you want to learn ?</h1>
        <h1 className="text-center text-secondaryText text-3xl">Lorem Ipsum</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 border border-gray-200 rounded-2xl shadow-sm dark:border-gray-700 md:mb-12">
          {cardsData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </section>
    </>
  );
};

export default WhatLearn;
