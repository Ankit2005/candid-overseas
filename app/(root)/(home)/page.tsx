import Filters from "@/components/Filters";
import Header from "@/components/Header";
import ContactUs from "@/components/Home/ContactUs";
import ImmigrationVisa from "@/components/Home/ImmigrationVisa";
import Offerings from "@/components/Home/Offerings";
import Services from "@/components/Home/Services";
import StudyCard from "@/components/Home/StudyCard";
import ResourceCard from "@/components/ResourceCard";
import SearchForm from "@/components/SearchForm";
import Hero from "@/components/Shared/Hero";
import { getResources, getResourcesPlaylist } from "@/sanity/actions";

export const revalidate = 900;

interface Props {
  searchParams: { [key: string]: string | undefined };
}

const Page = async ({ searchParams }: Props) => {
  const resources = await getResources({
    query: searchParams?.query || "",
    category: searchParams?.category || "",
    page: "1",
  });

  // const resourcesPlaylist = await getResourcesPlaylist();
  // h-[calc(100vh - 400px)]
  return (
    <main className="d ">
      {/* <section className="nav-padding w-full"> */}
      <Hero
        title={`Discover, Dream, and Achieve With Expert Study  Abroad
            Consultants`}
      />
      <StudyCard />
      <Services />
      <Offerings />
      <ImmigrationVisa />
      <ContactUs />
      {/* </section> */}
    </main>
  );
};

export default Page;
