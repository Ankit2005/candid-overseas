"use client";

import Image from "next/image";
import React, { useState } from "react";

interface CityData {
  image:string;
  mockTest: string;
}
const citiesData: { [key: string]: CityData } = {
    OnlineIELTS: {
    image:"/assets/permanent_residency_1.svg",
      mockTest: "Lorem1 ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore magna aliqua. Ut enim ad minimquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    
    },
    OfflineIELTS: {
        image:"/assets/permanent_residency_1.svg",
      mockTest: "Lorem2 ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore magna aliqua. Ut enim ad minimquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    Industrial: {
        image:"/assets/permanent_residency_1.svg",
      
      mockTest: "Lorem3 ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore magna aliqua. Ut enim ad minimquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
   
  };

const ProfessionalServices = () =>{
    const [selectedCity, setSelectedCity] = useState<string>("OnlineIELTS");

    const handleCityClick = (city: string) => {
      setSelectedCity(city);
    };
    
    const cityData = citiesData[selectedCity] || {}
    return(
        <>
         <section className="bg-center p-0 sm:p-8  lg:p-32 bg-no-repeat  bg-companyFeature flex flex-col justify-center lg:items-start lg:justify-start dark:bg-gray-900">
         
<div className="flex flex-col items-end ">


       
            <div className=" p-4  lg:mx-[25%]  ">
               <div className="font-bold text-center ">
               <h1 className="text-white text-2xl    md:text-4xl"> 
                Professional Main Services  
                </h1>
                <p className="text-white text-center text-lg     font-semibold ">
                Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium metus. Proin pretium id urna sit amet tincidunt.
                </p>
               </div>
              
            </div>
            
      
        <div className="  ">
        {/* Left Side */}
        <div className=" text-gray-700 rounded-md shadow-md">
  <ul className="flex flex-wrap lg:mx-[25%]">
    {Object.keys(citiesData).map((city) => (
      <li
        key={city}
        onClick={() => handleCityClick(city)}
        className={`cursor-pointer ${
          city === selectedCity
            ? "text-primary font-bold bg-white rounded-lg p-4 m-3"
            : "text-white rounded-lg box-border  p-4 m-3"
        }`}
      >
        {city}
      </li>
    ))}
  </ul>
</div>

 
      
       {/* Right Side */}
       <div className="bg-white  text-[#002777] p-4 rounded-md shadow-md lg:w-2/4 lg:mx-[25%]">
        {selectedCity ? ( // Render content based on the selected city
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 shadow-2xl my-5 ">
            <div>
              <h1 className="my-5">Based on coomercial</h1>
              <h1 className="text-2xl my-3">{selectedCity}</h1>
              <p>{cityData.mockTest}</p>
            </div>
            <div>
              <Image
                src={cityData.image}
                alt="Your Image"
                width={300}
                height={300}
              />
            </div>
          </div>
        ) : (
          <p>Select a city to view its content.</p>
        )}
      </div>
    </div>
  


      
        </div>
        </section>
        </>
    );
};

export default ProfessionalServices;