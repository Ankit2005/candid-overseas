import CompanyFeatureSection from "@/components/Ept/CompanyFeatureSection";
import Footer from "@/components/Footer";

import Navbar from "@/components/Navbar";
import MainService from "@/components/PermanentResidency/MainService";
import QualityService from "@/components/PermanentResidency/QualityService";
import Hero from "@/components/Shared/Hero";

const Page = async () => {
  // const resourcesPlaylist = await getResourcesPlaylist();
  // h-[calc(100vh - 400px)]
  interface CompanyFeature {
    title: string;
    description: string;
  }
  const Title: string = "Candid PR Visa Consultation Services";
  const companyFeatures: CompanyFeature[] = [
    {
      title: "Visa Eligibility Assessment",
      description:
        "Our expert consultants will assess your eligibility for a PR visa, offering insights and strategies to enhance your chances. We ensure you are well-prepared before taking the next step in your global academic journey.",
    },
    {
      title: "Document Preparation Assistance",
      description:
        "Simplify the complex documentation process with our assistance. We guide you in preparing a compelling application, ensuring all required documents are meticulously organized for a smooth PR visa application.",
    },
    {
      title: "Interview Preparation and Mock Sessions",
      description:
        "Master your PR visa interview with our tailored preparation and mock interview sessions. Our experts provide valuable feedback, helping you navigate the interview process with confidence and poise.",
    },
  ];
  return (
    <main className="">
      <Navbar />
      {/* <TransportImage/> */}
      <Hero title="Guiding Your Way to Permanent Residency" />
      <QualityService />
      {/* <MainService /> */}

      <CompanyFeatureSection title={Title} data={companyFeatures} />

      <Footer />
    </main>
  );
};

export default Page;
