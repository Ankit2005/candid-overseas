import Footer from "@/components/Footer";
import HowItWork from "@/components/InvestorVisa/HowItWork";
import ServicesVisa from "@/components/InvestorVisa/ServicesVisa";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Shared/Hero";

const Page = async () => {
  // const resourcesPlaylist = await getResourcesPlaylist();
  // h-[calc(100vh - 400px)]
  return (
    <main className="">
      <Navbar />
      {/* <TransportImage/> */}
      <Hero title="Invest Globally, Invest Confidently With Our Expert Guidance" />
      <HowItWork />
      <ServicesVisa />
      <Footer />
    </main>
  );
};

export default Page;
