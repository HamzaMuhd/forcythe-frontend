import Header from "@/components/Header";
import InfiniteScroll from "@/components/InfiniteScroll";
import ReadyToScaleSection from "@/components/ReadyToScale";


export default function Home() {
  return (
    <div className="flex flex-col justify-center w-full mt-[6.3rem] md:mt-[6.8rem] bg-primaryBackground">
      <Header />
      <InfiniteScroll />
      <ReadyToScaleSection/>
    </div>
  );
}
