import LeftSidebar from "@/components/LeftSidebar"
import MainTimeline from "@/components/MainTimeline"

const Home = () => {
  return (
    <div className='w-full h-full flex justify-center items-center relative bg-black'>
      <div className='max-w-screen-xl w-full h-full flex relative'>
        {/* left sidebar for navigation/header */}
        <LeftSidebar />
        <MainTimeline />
        {/* <section className="">right section</section> */}
      </div>
    </div>
  )
}

export default Home