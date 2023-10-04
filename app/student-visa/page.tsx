import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Shared/Hero";
import CountryStudentDetail from "@/components/StudentVisa/CountryStudentDetail";
import IdentityCard from "@/components/StudentVisa/IdentityCard";
import ServiceCards from "@/components/StudentVisa/ServiceCards";
import WorkAbout from "@/components/StudentVisa/WorkAbout";

const Page = async () => {
  // const resourcesPlaylist = await getResourcesPlaylist();
  // h-[calc(100vh - 400px)]
  return (
    <main className="">
      <Navbar />
      <Hero />
      <IdentityCard />
      <CountryStudentDetail />
      <WorkAbout />
      <ServiceCards />

      <Footer />
    </main>
  );
};

export default Page;
