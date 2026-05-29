import Header from "@/components/layouts/header";
import Hero from "@/components/hero";
import BestDeals from "@/components/best-deals";
import PropertyList from "@/components/property-list";
import GoodHands from "@/components/good-hands";
import BestRealEstate from "@/components/best-real-estate";
import Footer from "@/components/layouts/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <BestDeals />
        <PropertyList />
        <GoodHands />
        <BestRealEstate />
      </main>
      <Footer />
    </>
  );
}