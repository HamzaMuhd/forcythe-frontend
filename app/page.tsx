import BtoBSection from "@/components/BtoBSection";
import Header from "@/components/Header";
import InfiniteScroll from "@/components/InfiniteScroll";
import ReadyToScaleSection from "@/components/ReadyToScale";
import SparkToSpotlight from "@/components/SparkToSpotlight";
import StatisticsSection from "@/components/StartsSection";
import SuccessStories from "@/components/SuccessStories";


export default function Home() {
  return (
    <div className="flex flex-col justify-center w-full mt-[6.3rem] md:mt-[6.8rem] bg-primaryBackground">
      <Header />
      <div className="z-20 mt-[-1rem] md:mt-[-2rem]">
        <InfiniteScroll />
      </div>
      <SuccessStories />
      <SparkToSpotlight />
      <BtoBSection />
      <StatisticsSection />
      <ReadyToScaleSection />

    </div>
  );
}
