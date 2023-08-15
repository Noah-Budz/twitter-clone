import LeftSidebar from "@/components/LeftSidebar"
import MainTimeline from "@/components/MainTimeline"
import TrendingSection from "@/components/TrendingSection";


const Home = () => {
  return (
    <div className='w-full h-full flex justify-center items-center relative bg-black'>
      <div className='max-w-[70vw] w-full h-full flex relative'>
        <LeftSidebar />
        <MainTimeline />
        <TrendingSection />
      </div>
    </div>
  )}

export default Home;