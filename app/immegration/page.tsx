
import Footer from "@/components/Footer";
import Consultant from "@/components/Immegration/Consultant";
import HowItWork from "@/components/Immegration/HowItWork";
import SkillMigrant from "@/components/Immegration/SkillMigrant";
import TransportImage from "@/components/Immegration/TransportImage";
import Navbar from "@/components/Navbar";



const Page = async () => {
  // const resourcesPlaylist = await getResourcesPlaylist();
  // h-[calc(100vh - 400px)]
  return (
    <main className="">

    <Navbar/>
  <TransportImage/>
    <Consultant/>
    <SkillMigrant/>
    <HowItWork/>
    

    <Footer/>
    </main>

  );
};

export default Page;
