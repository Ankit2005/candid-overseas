
import Footer from "@/components/Footer";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Shared/Hero";
import DesignToGrow from "@/components/WorkUs/DesignToGrow";
import WhatLearn from "@/components/WorkUs/WhatLearn";



const Page = async () => {
  // const resourcesPlaylist = await getResourcesPlaylist();
  // h-[calc(100vh - 400px)]
  return (
    <main className="">

    <Navbar/>
  {/* <TransportImage/> */}
  <Hero/>
   
    <WhatLearn/>
    <DesignToGrow/>

    <Footer/>
    </main>

  );
};

export default Page;
