import React from "react";

const Hero = () => {
  return (
    <div className="bg-center h-[90vh] bg-no-repeat bg-heroBannerOne e-bg-gray-700-e e-bg-blend-multiply">
      <div className=" max-w-screen-md  h-full p-32  e-lg:py-56">
        <h1 className="mb-4 text-4xl font-semibold tracking-tight  text-white md:text-5xl lg:text-6xl">
          Building exactly the eCommerce website you want.
        </h1>

        <button className="btn-primary  text-white font-bold p-4 border-white border rounded-full">
          Start a New Store
        </button>
      </div>
    </div>
  );
};

export default Hero;
