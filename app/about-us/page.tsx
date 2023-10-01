import CityInfo from "@/components/AboutUs/CityInfo";
import CompanyFeatures from "@/components/AboutUs/CompanyFeatures";
import LogisticsSection from "@/components/AboutUs/LogisticSection";
import ServiceCards from "@/components/AboutUs/ServicesCards";
import Team from "@/components/AboutUs/Team";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Shared/Hero";

const Page = async () => {
  // const resourcesPlaylist = await getResourcesPlaylist();
  // h-[calc(100vh - 400px)]
  return (
    <main className="">
      <Navbar />

      <Hero />
      <LogisticsSection />
      <CompanyFeatures/>
      <CityInfo/>
      <ServiceCards/>
      <Team/>

      <Footer />
    </main>
  );
};

export default Page;
