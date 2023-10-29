import Image from "next/image";

const QualityService = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 py-4 px-2 mx-auto max-w-screen-xl lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 shadow-2xl my-5">
          <div className="my-5" >
            <p className="text-primary">Welcome to BlueCollar</p>
            <h1 className="text-primary text-3xl">We’re Commited</h1>
            <h1 className="text-primary text-3xl">to Quality</h1>
            <p className="text-secondaryText">
              Proactively envisined multimeda based exptis and cross media
              growth strategies seamlessly visualized quality a intellectual
              capitals withouts superiors collaboration ideas sharing
              holistically pontificated installed base portals after
              maintainable products.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4  my-5">
<div className="flex space-x-4">
   
    <Image
        
        src="/assets/rightinnertick.svg"
  alt="Your Image"

  width={30} height={30}
  
/>
<p className="text-primary text-lg">We provide 24/7 service</p>
</div>
<div className="flex space-x-4">
   
    <Image
        
        src="/assets/rightinnertick.svg"
  alt="Your Image"

  width={30} height={30}
  
/>
<p className="text-primary text-lg">Greate Technology</p>
</div>
<div className="flex space-x-4">
   
    <Image
        
        src="/assets/rightinnertick.svg"
  alt="Your Image"

  width={30} height={30}
  
/>
<p className="text-primary text-lg">Qualified Agents</p>
</div>
<div className="flex space-x-4">
   
    <Image
        
        src="/assets/rightinnertick.svg"
  alt="Your Image"

  width={30} height={30}
  
/>
<p className="text-primary text-lg">35 Years Experiance</p>
</div>
            </div>
            <a
        href="#"
        className="border btn-primary inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-md my-4 ml-8"
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
          <div>
          <Image
        
        src="/assets/permanent_residency_1.svg"
  alt="Your Image"

  width={600} height={400}
  
/>
          </div>
        </div>
      </section>
    </>
  );
};
export default QualityService;
