import { useState } from 'react'
import classNames from 'classnames';
import React,{useEffect} from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'
import HomeIcon from '@heroicons/react/solid/HomeIcon';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const ANIMATION_TIME = 300;
  const [isFlipped, setIsFlipped] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(false);

  useEffect(() => {
    Aos.init({ duration:2000, delay: 10 });
  }, [])

  const handleEnvelopeClick = () => {
    if (!isFlipped) {
      setIsFlipped(!isFlipped);
      setTimeout(() => {
        setIsCardVisible(!isCardVisible);
      }, ANIMATION_TIME);
    }
  };

  const handleCloseClick = (e) => {
    console.log(e)
    setIsCardVisible(false);
    setIsFlipped(false);
    setTimeout(() => {
      setIsFlipped(false);
    }, ANIMATION_TIME);
    e.stopPropagation();
  };

  const handleSendClick = (e) => {
    setIsCardVisible(false);
    setIsFlipped(true);
    e.stopPropagation();
  };

 

  return (
    <>
    
    <div className='h-screen overflow-y-hidden'>
      <div className='flex flex-col flex-wrap '>
        <div className='w-full flex flex-col justify-center items-center text-white p-20'>
          <h2 className='text-2xl font-sans font-extralight'>THE WEDDING OF</h2>
          <h2 className='text-2xl'>Ramdani Aditya</h2>
          <h2 className='text-2xl'>❤</h2>
          <h2 className='text-2xl'>Yuliana Sari</h2>
          <h4 className='text-white text-lg '>23 Juni 2024</h4>
        </div>
        <div id="envelope" className={classNames({'flip': isFlipped })} onClick={handleEnvelopeClick}>
        </div>
      </div>
      {/* {console.log(isCardVisible)} */}
      {isCardVisible && (
        <div id="card" style={{ display: isCardVisible ? 'block' : 'none' }}>
          <button id="close" className='pulse z-50' onClick={handleCloseClick}></button>

          <div className='h-screen w-full relative overflow-hidden'>
            <img  src="https://i.ibb.co/B36dgGf/IMG-3375.jpg" alt="" className='object-cover object-center h-screen w-full' data-aos='fade-down' />
            <div className='absolute w-full justify-center items-center flex flex-col top-0 bottom-0'>
              <h2 className='text-white text-3xl lg:text-2xl font-extralight font-sans' data-aos="fade-down">WEDDING OF</h2>
              <div className='flex justify-center items-center'>
                <img src="https://i.ibb.co/vvzdbGn/Flower-PNG-Free-Download-removebg-preview.png" alt="" className='w-32 lg:w-56' data-aos="fade-left" />
                <div className='flex flex-col justify-center items-center text-center'>
                  <h2 className='text-white text-4xl lg:text-5xl'>Ramdani Aditya </h2>
                  <h2 className='text-white text-4xl lg:text-5xl'>Yuliana Sari</h2>
                </div>
                <img src="https://i.ibb.co/vvzdbGn/Flower-PNG-Free-Download-removebg-preview.png" alt="" className='w-32 lg:w-56 rotate-180'/>
              </div>
              <h4 className='text-white text-xl lg:text-2xl' data-aos="fade-up">23 Juni 2024</h4>
              <h4 className='text-white text-xl lg:text-2xl' data-aos="fade-down">No limit Indonesia</h4>
            </div>
          </div>


          <button id="close" className='pulse' onClick={handleCloseClick}></button>
          <div className='w-full relative'>
            <img src="https://i.ibb.co/ZdyyZDs/IMG-3001.jpg" alt="" data-aos="fade-left" className='object-cover object-center h-screen w-full grayscale' />
            <div className='absolute w-full justify-center items-center text-center flex flex-col top-1/2 bottom-1/2'>
              <h3 className='text-white' data-aos='fade-down'>Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.</h3>
              <h2 className='text-white text-3xl lg:text-2xl font-medium font-sans' data-aos='fade-down'>AR-RUM AYAT 21</h2>
            </div>
          </div>
          <div className='w-full relative'>
            <div className='bg-black w-full h-screen'></div>
            {/* <img src="https://i.ibb.co/ZdyyZDs/IMG-3001.jpg" alt="" className='object-cover object-center h-screen w-full' /> */}
            <div className='absolute w-full justify-center items-center text-center flex flex-col top-1/2 bottom-1/2 px-10'>
              <h3 className='text-white text-lg'>Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.</h3>
              <h2 className='text-white text-3xl lg:text-2xl font-medium font-sans'>AR-RUM AYAT 21</h2>
            </div>
          </div>
          <div className='w-full flex flex-wrap p-10'>
            <div>
              <img src="https://i.ibb.co/7kbCKKZ/IMG-3845.jpg" alt="" className='' />
            </div>
            <div>

            </div>
          </div>
        </div>
      )}
    </div>

    </>
  )
}

export default App
