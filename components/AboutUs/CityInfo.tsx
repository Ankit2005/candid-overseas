"use client";

import React, { useState } from "react";

interface CityData {
  officeTime: string;
  grammar: string;
  skill: string;
  regular: string;
  extra: string;
  mockTest: string;
}

const citiesData: { [key: string]: CityData } = {
  Ahmedabad: {
    officeTime: "7:30 AM To 7:00 PM",
    grammar: "7:30 AM To 9:30 AM, 10:00 AM To 12:00 PM, 5:00 PM To 7:00 PM",
    skill: "7:30 AM To 9:30 AM, 10:00 AM To 12:00 PM, 5:00 PM To 7:00 PM",
    regular: "7:30 AM To 9:30 AM, 10:00 AM To 12:00 PM, 5:00 PM To 7:00 PM",
    extra: "12:00 PM To 5:00 PM",
    mockTest: "Friday (Speaking), Saturday: L, R, W",
  },
  Khadi: {
    officeTime: "Khadi Office Time",
    grammar: "Khadi Grammar",
    skill: "Khadi Skill",
    regular: "Khadi Regular",
    extra: "Khadi Extra",
    mockTest: "Khadi Mock Test",
  },
  Mehsana: {
    officeTime: "Mehsana Office Time",
    grammar: "Mehsana Grammar",
    skill: "Mehsana Skill",
    regular: "Mehsana Regular",
    extra: "Mehsana Extra",
    mockTest: "Mehsana Mock Test",
  },
  Visnagar: {
    officeTime: "Visnagar Office Time",
    grammar: "Visnagar Grammar",
    skill: "Visnagar Skill",
    regular: "Visnagar Regular",
    extra: "Visnagar Extra",
    mockTest: "Visnagar Mock Test",
  },
};

const CityInfo: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>("Ahmedabad");

  const handleCityClick = (city: string) => {
    setSelectedCity(city);
  };

  return (
    <div className="container mx-auto p-4 my-2 md:my-6">
      <h4 data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="2000" className="text-gray-400">Our Facilities</h4>
      <h1 data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="2000" className="heading1 text-3xl font-medium">Time Schedule </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Side */}
        <div         data-aos="zoom-in"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="1400" className="bg-white text-gray-700  rounded-md shadow-md">
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
        <div         data-aos="zoom-in"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="1400" className="bg-[#F0ECFF]  text-[#002777] p-4 rounded-md shadow-md">
          <ul>
            <li>Office Time: {citiesData[selectedCity].officeTime}</li>
            <li>Grammar: {citiesData[selectedCity].grammar}</li>
            <li>Skill: {citiesData[selectedCity].skill}</li>
            <li>Regular: {citiesData[selectedCity].regular}</li>
            <li>Extra: {citiesData[selectedCity].extra}</li>
            <li>Mock test: {citiesData[selectedCity].mockTest}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CityInfo;
