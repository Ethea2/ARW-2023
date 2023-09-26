import React, { useState } from 'react';
import Drawer from '../../components/drawer/Drawer';

const AboutUs = () => {

    
  const [showContent, setShowContent] = useState(false);

  // Function to handle the play button click
  const handlePlayClick = () => {
    setShowContent(true);
  };

  return (
    <div>
      <Drawer />

      {showContent ? (
        // Display the content after pressing the button
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

            {/* Add your content here */}
          </div>
        </div>
      ) : (
        // Display the play button initially
        <div className="w-full h-screen flex justify-center items-center">
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
          <button className="btn btn-primary" onClick={handlePlayClick}>
            Play
          </button>
        </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;