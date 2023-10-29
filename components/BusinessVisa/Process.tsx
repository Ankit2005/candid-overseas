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
      
  <div className="p-4 rounded-xl box-border border-white-500 shadow-lg" >
<img className="rounded-full w-15 h-10" src={profileImageUrl} alt="profile picture" />
<p className="font-bold text-xl my-2">
    {title}
</p>
<p className="text-[#595566]"> 
    {quote}

</p>
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
      quote: 'Podcasting operational change management  workflow. ',
      profileImageUrl: '/assets/process.svg',
      
      authorImage: '/assets/learnman.svg',
      authorName: 'Bonnie Green',
      title: 'Consistency',
    },
    {
        quote: 'Podcasting operational change management  workflow.        ',
       profileImageUrl: '/assets/process.svg',
        
        authorImage: '/assets/learnman.svg',
        authorName: 'Bonnie Green',
        title: 'Improvement',
      },
      {
        quote: 'Podcasting operational change management  workflow.',
       profileImageUrl: '/assets/process.svg',
        
        authorImage: '/assets/learnman.svg',
        authorName: 'Bonnie Green',
        title: 'Branching',
      },
      {
        quote: 'Podcasting operational change management  workflow.',
       profileImageUrl: '/assets/process.svg',
        
        authorImage: '/assets/learnman.svg',
        authorName: 'Bonnie Green',
        title: 'Company Growth',
      },
     

    // Add more card data as needed
  ];
const Process = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 py-4 px-2 mx-auto max-w-screen-xl lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 mb-8  md:mb-12">
          <div className="text-black">
            <p className="text-white bg-[#4EAF4E] py-3  px-1 rounded-lg w-1/4">
              Proccess
            </p>
            <h1 className="text-3xl font-bold">
              There have some easy steps to join with us!
            </h1>
            <p className="text-[#595566]">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster
              collaborative thinking to further the overall value proposition.
            </p>
            <hr className="mt-4 border-gray-400 border-t-2"></hr>
            <div className="flex my-4 space-x-8">
              <div>
                <p className="bg-[#FFCC4A] p-4 rounded-3xl">1</p>
              </div>
              <div>
                <p className="font-semibold text-xl">Setup Account</p>
                <p>
                  We understand the importance of approaching each work
                  integrally.
                </p>{" "}
              </div>
            </div>
            <hr className="mt-4 border-gray-400 border-t-2"></hr>
            <div className="flex my-4 space-x-8">
              <div>
                <p className="bg-[#4EAF4E] text-white p-4 rounded-3xl">2</p>
              </div>
              <div>
                <p className="font-semibold text-xl">Setup Account</p>
                <p>
                  We understand the importance of approaching each work
                  integrally.
                </p>{" "}
              </div>
            </div>
            <hr className="mt-4 border-gray-400 border-t-2"></hr>
            <div className="flex my-4 space-x-8">
              <div>
                <p className="bg-[#181818] text-white p-4 rounded-3xl">3</p>
              </div>
              <div>
                <p className="font-semibold text-xl">Setup Account</p>
                <p>
                  We understand the importance of approaching each work
                  integrally.
                </p>{" "}
              </div>
            </div>
          </div>

          <div className="text-black">  <p className="text-black bg-[#FFCC4A] py-3 px-1 rounded-lg w-2/4 md:w-4/5 lg:w-2/4">
          Growing with our clients
            </p>
            <h1 className="text-3xl font-bold">
            30 Years of Experience
            </h1>
            <p className="text-[#595566]">
            Capitalize on low hanging fruit to identify a ballpark value added activity beta test. Override the digital divide with additional from DevOps.
            </p>
            <p className="text-[#595566] my-2">
Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
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
