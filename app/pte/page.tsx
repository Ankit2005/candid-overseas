import Footer from "@/components/Footer";

import Navbar from "@/components/Navbar";
import BestInWorld from "@/components/Pte/BestInWorld";
import ProfessionalServices from "@/components/Pte/ProfessionalServices";
import PteHero from "@/components/Pte/PteHero";
import PteService from "@/components/Pte/PteService";
import YourThrees from "@/components/Pte/YourThrees";

import Hero from "@/components/Shared/Hero";

const Page = async () => {
  // const resourcesPlaylist = await getResourcesPlaylist();
  // h-[calc(100vh - 400px)]
  return (
    <main className="">
      <Navbar />
      {/* <TransportImage/> */}
      <Hero title="Strive for Excellence: Achieve PTE Success with Dedicated PTE Coaching" />
      {/* <PteHero/>   */}
      <YourThrees />
      <BestInWorld />
      <ProfessionalServices />
      <PteService />

      <Footer />
    </main>
  );
};

export default Page;
