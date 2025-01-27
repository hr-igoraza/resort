import React, { useRef, useState } from 'react';
import exp from '../assets/Videos/exp_video.mp4';
import playButton from '../assets/Images/play_button.png';
import pauseButton from '../assets/Images/play_button.png'; // Add a pause button image

const Experience = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Handle play/pause toggle
  const handleVideoPlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className='text-center px-4 md:px-[100px] lg:px-[150px] flex flex-col lg:gap-[50px] gap-[20px] py-16'>
      <p className='text-[40px] md:text-[50px] lg:text-[65px] font-bold leading-tight'>
        Captured Journeys
      </p>
      <div className='relative flex justify-center items-center'>
        <video ref={videoRef} src={exp} muted className='mx-auto w-full lg:w-full shadow-lg'></video>
        <button 
          onClick={handleVideoPlayPause} 
          className='absolute cursor-pointer'
        >
          <img 
            src={isPlaying ? "" : playButton} 
            alt={isPlaying ? "Pause" : "Play"} 
            className='lg:w-[200px] md:h-[100px] lg:h-[200px] md:w-[100px] max-sm:h-[100px] max-sm:w-[100px]'
          />
        </button>
      </div>
      <div className='flex flex-col items-start text-start gap'>
        <p className='text-lg md:text-[24px] leading-[30px] font-bold  text-gray-700'>
          Whether you're yearning for a romantic retreat or a well-deserved family getaway, 
          <br className='hidden md:block' /> Formosa Bay is your ideal destination.
        </p>
        <p className='text-gray-500 text-md md:text-sm text-sm leading-[30px] font-normal '>October 18, 2025</p>
      </div>
    </div>
  );
};

export default Experience;
