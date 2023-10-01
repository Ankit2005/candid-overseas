
import CityInfo from "@/components/AboutUs/CityInfo";
import CompanyFeatureSection from "@/components/Ept/CompanyFeatureSection";
import GetBenefit from "@/components/Ept/GetBenefit";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Shared/Hero";

const Page = async () => {
  // const resourcesPlaylist = await getResourcesPlaylist();
  // h-[calc(100vh - 400px)]
  return (
    <main className="">

    <Navbar/>
    <Hero />
    <GetBenefit/>
    <CityInfo/>
    <CompanyFeatureSection/>
   
    <Footer/>
    </main>

  );
};

export default Page;
