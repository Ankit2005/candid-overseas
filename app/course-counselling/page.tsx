import Gallery from "@/components/CourseCounSelling/Gallery";
import ProcessSection from "@/components/CourseCounSelling/ProcessSection";
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
      <Hero title="Unlock financial opportunities for your academic journey." />
      <ProcessSection />
      <Gallery />

      <Footer />
    </main>
  );
};

export default Page;
