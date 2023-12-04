"use client";

import React, { useState } from "react";

interface CityData {
  address: string;
  officeTime: string;
}

const citiesData: { [key: string]: CityData } = {
  Ahmedabad: {
    address: "Coming soon",
    officeTime: "-",
  },
  Kadi: {
    address: "SH 1, vatsalya status Nr. Railway station,Kadi",
    officeTime: "7:30 AM To 7:00 PM",
  },
};

const CityInfo: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>("Ahmedabad");

  const handleCityClick = (city: string) => {
    setSelectedCity(city);
  };

  return (
    <div className="container mx-auto p-4 my-2 md:my-6">
      <h1
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="2000"
        className="heading1 text-3xl font-medium"
      >
        Our Branches
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Side */}
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="1400"
          className="bg-white text-gray-700  rounded-md shadow-md"
        >
          <ul>
            {Object.keys(citiesData).map((city) => (
              <li
                key={city}
                onClick={() => handleCityClick(city)}
                className={`cursor-pointer ${
                  city === selectedCity
                    ? "text-white font-bold bg-red-700 rounded-lg p-4 my-3"
                    : "text-gray-700 bg-white p-4 my-3"
                }`}
              >
                {city}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side */}
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="1400"
          className="bg-[#F0ECFF]  text-[#002777] p-4 rounded-md shadow-md"
        >
          <ul>
            <li>Address : {citiesData[selectedCity].address}</li>
            <li>Office Time: {citiesData[selectedCity].officeTime}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CityInfo;
