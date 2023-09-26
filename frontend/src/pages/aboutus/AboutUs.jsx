import React from 'react';
import Drawer from '../../components/drawer/Drawer';

const AboutUs = () => {

    return (
        // <div className="w-full h-screen flex justify-center items-center">
        //     <span className="font-bold font-bit text-9xl">HELLO I AM 1!</span>
        //     <button className="btn btn-primary">Play</button>
        // </div>
        <div>
        <Drawer></Drawer>
        
        <div className="relative h-screen flex flex-col justify-center items-center">
        <div
          id="background"
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(/aboutus-bg1.svg)`,
            backgroundSize: "cover",
          }}
        ></div>

    <div className="relative z-10 p-8 text-center">
        <span className="font-bold font-bit text-4xl sm:text-6xl lg:text-9xl">
          About Us
        </span>

        <button className="btn btn-primary mt-4">
          Play
        </button>
      </div>


      </div>
      </div>
    )
}

export default AboutUs