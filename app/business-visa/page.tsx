import HowIsWork from "@/components/BusinessVisa/HowIsWork";
import Process from "@/components/BusinessVisa/Process";
import Footer from "@/components/Footer";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Shared/Hero";

const Page = async () => {
  // const resourcesPlaylist = await getResourcesPlaylist();
  // h-[calc(100vh - 400px)]
  return (
    <main className="">
      <Navbar />
      {/* <TransportImage/> */}
      <Hero />
      <Process />
      <HowIsWork />

      <Footer />
    </main>
  );
};

export default Page;
