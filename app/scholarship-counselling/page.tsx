import Footer from "@/components/Footer";

import Navbar from "@/components/Navbar";
import QualityScholarship from "@/components/ScholarshipCounselling/QualityScholarship";

import Hero from "@/components/Shared/Hero";

const Page = async () => {
  // const resourcesPlaylist = await getResourcesPlaylist();
  // h-[calc(100vh - 400px)]
  return (
    <main className="">
      <Navbar />
      {/* <TransportImage/> */}
      <Hero title="Unlock financial opportunities for your academic journey." />

      <QualityScholarship />

      <Footer />
    </main>
  );
};

export default Page;
