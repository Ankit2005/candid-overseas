

import Footer from "@/components/Footer";


import Navbar from "@/components/Navbar";
import MainService from "@/components/PermanentResidency/MainService";
import QualityService from "@/components/PermanentResidency/QualityService";
import Hero from "@/components/Shared/Hero";




const Page = async () => {
  // const resourcesPlaylist = await getResourcesPlaylist();
  // h-[calc(100vh - 400px)]
  return (
    <main className="">

    <Navbar/>
  {/* <TransportImage/> */}
  <Hero/>
  <QualityService/>
  <MainService/>

  
    <Footer/>
    </main>

  );
};

export default Page;
