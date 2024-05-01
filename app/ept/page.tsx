import CityInfo from "@/components/AboutUs/CityInfo";
import CompanyFeatureSection from "@/components/Ept/CompanyFeatureSection";
import GetBenefit from "@/components/Ept/GetBenefit";
import OurFacilities from "@/components/Ept/OurFacilities";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Shared/Hero";

interface CompanyFeature {
  title: string;
  description: string;
}
const Title: string = "Your Trusted EPT Consultants for Foreign Study Success";

const companyFeatures: CompanyFeature[] = [
  {
    title: "Expertise",
    description:
      "Our EPT Expert consultants bring a wealth of experience, ensuring you're well-prepared for the linguistic challenges of the EPT.",
  },
  {
    title: "Personalized Approach for Optimal Results",
    description:
      "We understand that each student is unique. Our tailored strategies and one-on-one support guarantee a personalized journey to language proficiency and success in the EPT",
  },
];

const Page = async () => {
  // const resourcesPlaylist = await getResourcesPlaylist();
  // h-[calc(100vh - 400px)]
  return (
    <main className="">
      <Navbar />
      <Hero title="Your Trusted EPT Consultants for Foreign Study Success" />
      <OurFacilities />
      <GetBenefit />
      <CityInfo />

      <CompanyFeatureSection title={Title} data={companyFeatures} />

      <Footer />
    </main>
  );
};

export default Page;
