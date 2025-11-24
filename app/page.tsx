import Navbar from './components/Navbar';
import { Fade, Slide } from 'react-awesome-reveal';
import Trailanimated from './components/Trailanimated';
import SlideGallery from './components/SlideGallery';
import RunningText from './components/RunningText';
import BottomBar from './components/Bottombar';
import VideoBackground from './components/VideoBackground';

export default function Home() {
  return (
    <main className="px-0.5">
      <Navbar />
      <VideoBackground src={'/longman.mp4'}/>
      <div className="block relative w-full h-auto">
        <div className="absolute md:bottom-1/5 bottom-1/5 text-white px-10 md:px-32 z-20">
          <div className="block">
            <Fade>
              <div className="h-0 w-1/12 sm:w-30  bg-amber-300 md:h-full rounded-3xl absolute bottom-50 opacity-90"></div>
            </Fade>

            <Trailanimated />

            <Fade>
              <p className="text-white w-1/2 hidden sm:block">
                The Leading Global Integrated Mining on Kapuas. Kapuas Silica is
                a fully integrated corporation with mining, resource-based
                manufacturing and renewables businesses, committed to delivering
                sustainable solutions national scale.
              </p>
            </Fade>
          </div>
        </div>

        <div className="w-1/3 h-1/3 absolute bottom-14 right-0 mx-16 rounded-xl z-20">
          <SlideGallery />
        </div>
        <div className="absolute bg-black opacity-50 w-full h-full z-10">
          tes
        </div>
        <img
          src="pic1.jpg"
          alt="first"
          style={{ width: '100%', height: 'auto' }}
          className="top-0"
        />
      </div>

      <Slide className="flex justify-center items-center w-full py-10">
        <div className="bg-linear-to-r from-amber-300  to-amber-500 w-full mx-20 md:mx-100 rounded-2xl opacity-85">
          <center className="text-xl md:text-2xl font-bold text-white ring-offset-8">
            Our Focus Bussiness
          </center>
        </div>
        {/* our focuss bussiness  */}
        <div className="flex w-full mx-30 items-center justify-center space-x-11">
          <div className="bg-linear-to-trounded-2xl w-100 p-1 text-white">
            <div className="relative w-full h-full">
              <div className="absolute ring-offset-amber-500 top-0 left-0 -z-10 rounded-2xl  w-full h-full bg-linear-to-t from-amber-500  to-amber-300 opacity-55"></div>
              <div className="p-1">
                <img src="minings.jpg" alt="" className="rounded-2xl" />
                <center className="text-xl font-bold">
                  Mining Commodities
                </center>
                <p style={{ textAlign: `justify` }} className="my-1">
                  Leveraging our network and expertise, we facilitate trading
                  various superior commodities from Kalimantan. We bridging
                  local producers with the domestic market and internationally,
                  ensuring an efficient and reliable supply chain.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-linear-to-trounded-2xl w-100 p-1 text-white">
            <div className="relative w-full h-full">
              <div className="absolute ring-offset-amber-500 top-0 left-0 -z-10 rounded-2xl  w-full h-full bg-linear-to-t from-amber-500  to-amber-300 opacity-55"></div>
              <div className="p-1">
                <img src="picgas.jpg" alt="" className="rounded-2xl" />
                <center className="text-xl font-bold">LPG Distributor</center>
                <p style={{ textAlign: `justify` }} className="my-1">
                  As an official Pertamina partner, we are proud to be able to
                  serve the community by distributing LPG. We are committed to
                  maintaining stock availability and smooth distribution, both
                  for household needs (3kg) and commercial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      <div className="flex justify-center items-center text-xl md:text-6xl font-bold text-white z-100">
        Visi
      </div>
      <div className="flex w-full h-auto justify-center">
        <RunningText
          text={
            'Become the main pillar in trade and distribution that contributes to regional economic growth.'
          }
          duration={10000}
        ></RunningText>
      </div>
      <div className="flex justify-center items-center text-xl md:text-6xl font-bold text-white z-100">
        Mission
      </div>
      <div className="flex w-full h-auto justify-center">
        <RunningText
          text={
            'Conduct business with integrity, professionalism and full commitment to customer satisfaction.'
          }
          duration={13000}
        ></RunningText>
      </div>
      <div className="h-svh flex items-center">
        <div className="block w-full">
          <div className="flex justify-center items-center text-white text-7xl ">
            <img src="leftwings.png" alt="" width={100} height={50} />
            <span
              style={{
                fontFamily: 'Tapestry',
                fontWeight: 400,
                fontStyle: 'normal',
              }}
            >
              Our Partner
            </span>
            <img src="rightwings.png" alt="" width={100} height={50} />
          </div>
          <div className="flex justify-center items-center text-white text-7xl ">
            <br />
            <br />
            <img src="mitras1.png" alt="" width={50} height={50} />
            <span className="text-2xl">PT. Kurnia Purnama Mineral</span>
          </div>
        </div>
      </div>

      <div className="flex w-full h-auto"></div>
      <BottomBar/>
    </main>
  );
}
