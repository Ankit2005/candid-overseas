// ServiceCards.tsx
import React from 'react';

const PteService: React.FC = () => {
  const services = [
    {
      title: 'Career & Course',
      description:
        'As an Abroad Education Consultants, it’s our primary responsibility to help every overseas aspirant and canopy every aspect like career counselling, & Course selection to country of their choice and find best suited course consistent with their profile',
    },
    {
      title: 'University Selection',
      description:
        'After finalized course selection for aspirant our next step is to pick appropriate university which might best for your Personal, Academic and Financial parameters. We always take this process very seriously while selecting best universities for you not limited to universities & colleges we represent.',
    },
    {
      title: 'Training Services',
      description:
        'Learn IELTS, PTE, GRE & TOEFL from the simplest of all the time and polish your language. Stamp Visa may be a place which can lookout of all the aspects of IELTS listening speaking reading and writing. The training will burnish your English and can bring ease to your English.',
    },
    {
      title: 'Admission Guidance',
      description:
        'After Finalised Course, Country and University selection our next step is to start out your admission process for offer letter within the appropriate University. We assist with every possible support and our specialties will greatly benefit you in preparing your profile positively for admission within the respective University',
    },
    
    // Add more services as needed
  ];

  return (
    <div className="container mx-auto my-2 md:my-6 p-4">
      <p  data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="2000"  className="text-lg text-center text-lightPurple">Services</p>
      <h4  data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="2000" className="text-3xl text-center text-secondaryText font-bold mt-2 mb-4">
        Other Services
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration={index * 400}
            className={`p-6 rounded-lg shadow-lg ${
              (index % 4 === 0 || index % 4 === 3) // Use index % 4 to determine the pattern
                ? 'bg-lightBlue text-grey-400'
                : 'bg-mediumRed text-grey-400'
            }`}
          >
            <div
              className={` ${
                (index % 4 === 0 || index % 4 === 3) // Use index % 4 to determine the pattern
                  ? 'text-darkBlueNav border-l-4 border-darkBlueNav'
                  : 'text-redHeading border-l-4 border-redHeading '
              } pl-2`}
            >
              <h2 className="text-lg font-semibold">{service.title}</h2>
            </div>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PteService;
