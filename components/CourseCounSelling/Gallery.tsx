import Image from "next/image";

const Gallery = () =>{
    return(
        <>
        <section className="bg-white dark:bg-gray-900 py-4 px-2 mx-auto max-w-screen-xl lg:py-16">
            <div>
            <p className="text-white bg-[#4EAF4E] py-3  px-1 rounded-lg w-1/4">
              Proccess
            </p>
            </div>
            <div className="md:flex justify-between">
                <div className="text-black my-2 text-3xl w-3/4">
                Our client, global analytical techno company, wanted to build market.
                </div>
                <div>
                <button
              type="button"
              className="text-black bg-yellow-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              More Gallery
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
                </div>
               
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 shadow-2xl my-5">
           
           <div className="bg-white rounded-lg overflow-hidden">
           <Image
                  src="/assets/howiswork.svg"
                  className=" rounded-md"
                  width={600}
                  height={400}
                  alt="candid logo"
                />
           </div>

          
           <div className="bg-white rounded-lg overflow-hidden">
           <Image
                  src="/assets/howiswork.svg"
                  className=" rounded-md"
                  width={600}
                  height={400}
                  alt="candid logo"
                />
           </div>

          
           <div className="bg-white rounded-lg overflow-hidden">
           <Image
                  src="/assets/howiswork.svg"
                  className=" rounded-md"
                  width={600}
                  height={400}
                  alt="candid logo"
                />
           </div>

          
           <div className="bg-white rounded-lg overflow-hidden">
           <Image
                  src="/assets/howiswork.svg"
                  className=" rounded-md"
                  width={600}
                  height={400}
                  alt="candid logo"
                />
           </div>

           
           <div className="bg-white rounded-lg overflow-hidden">
           <Image
                  src="/assets/howiswork.svg"
                  className=" rounded-md"
                  width={600}
                  height={400}
                  alt="candid logo"
                />
           </div>

           
           <div className="bg-white rounded-lg overflow-hidden">
           <Image
                  src="/assets/howiswork.svg"
                  className=" rounded-md"
                  width={600}
                  height={400}
                  alt="candid logo"
                />
           </div>
       </div>
       <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 shadow-2xl my-5">
    <div className="text-center">
        <p className="text-black text-2xl"> 1128+</p>
        <p className="text-black text-md">Successful Work</p>
    </div>
    <div className="text-center">
        <p className="text-black text-2xl"> 908+</p>
        <p className="text-black text-md">Team member</p>
    </div>
    <div className="text-center">
        <p className="text-black text-2xl"> 258+</p>
        <p className="text-black text-md">Happy Customers</p>
    </div>
    <div className="text-center">
        <p className="text-black text-2xl"> 564+</p>
        <p className="text-black text-md">Creative Idea</p>
    </div>
       </div>
        </section>
        </>
    );
};
export default Gallery