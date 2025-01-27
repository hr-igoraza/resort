import React from 'react'
import exp from '../assets/Videos/exp_video.mp4'
import playButton from '../assets/Images/play_button.png'

const Experience = () => {
  return (
    <div className='text-center px-[150px] flex flex-col gap-[100px]'>
        <p className='text-[65px] font-bold leading-[40px]'>Captured Journeys</p>
        <div>
            <video src={exp} className='mx-auto'></video>
            <button>
                <img src={playButton} alt="" />
            </button>
        </div>
        <div className='flex flex-col items-start text-start'>
            <p>Whether you're yearning for a romantic retreat or a well-deserved family getaway, <br /> Formosa Bay is your ideal destination.</p>
            <p>October 18, 2025</p>
        </div>
    </div>
  )
}

export default Experience