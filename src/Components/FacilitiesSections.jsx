import wifiIcon from '../assets/Images/wifiIcon.png'
import parking from '../assets/Images/parking_Area_Icon.png'
import dumbell from '../assets/Images/DumbellIcon.png'
import elipsis from '../assets/Images/EllipsisIcon.png'
import workspace from '../assets/Images/WorkspaceIcon.png'


const FacilitiesSections = () => {
  return (
    <div className="mt-[300px] absolute w-full h-[500px] bg-[#025D28] flex flex-col justify-center items-center gap-[80px] rounded-t-[40px]">
        <p className="text-[65px]  font-bold text-white tracking-wide">We provide top facilities</p>
        <div className="w-full h-[193px] flex justify-center items-center gap-12">
            <div className="w-[193px] h-[193px] bg-white text-center flex flex-col justify-center items-center gap-5 rounded-[8px]">
                <img src={wifiIcon} alt="" height={40} width={40} />
                <p className='text-[#1C1C1C] text-[16px] w-[139px] h-[28px] '>High-Speed Wi-Fi</p>
            </div>
            <div className="w-[193px] h-[193px] bg-white text-center flex flex-col justify-center items-center gap-5 rounded-[8px]">
                <img src={parking} alt="" height={40} width={40} />
                <p className='text-[#1C1C1C] text-[16px] w-[139px] h-[28px] '>Parking Area</p>
            </div>
            <div className="w-[193px] h-[193px] bg-white text-center flex flex-col justify-center items-center gap-5 rounded-[8px]">
                <img src={dumbell} alt="" height={40} width={40} />
                <p className='text-[#1C1C1C] text-[16px] w-[139px] h-[28px] '>Gym and Fitness</p>
            </div>
            <div className="w-[193px] h-[193px] bg-white text-center flex flex-col justify-center items-center gap-5 rounded-[8px]">
                <img src={workspace} alt="" height={40} width={40} />
                <p className='text-[#1C1C1C] text-[16px] w-[139px] h-[28px] '>Private Workspace</p>
            </div>
            <div className="w-[193px] h-[193px] bg-white text-center flex flex-col justify-center items-center gap-5 rounded-[8px]">
                <img src={elipsis} alt="" height={40} width={40} />
                <p className='text-[#1C1C1C] text-[16px] w-[139px] h-[28px] '>Other Services</p>
            </div>

        </div>
    </div>
  )
}

export default FacilitiesSections