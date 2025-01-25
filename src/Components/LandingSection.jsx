import bg from '../assets/Images/Hero_Bg_Image.png'
import search from '../assets/Images/Search_icon.png'

const LandingSection = () => {
  return (
    <div className="h-screen w-[100%]">
        <img src={bg} alt="Hero_Bg_Image" className='-mt-5 w-full h-[1068px]'/>
        <div className='-mt-[580px] flex display justify-center items-center flex-col gap-[50px]'>
            <p className='text-[65px] font-[700] text-white'>Where Paradise Feels Like Home</p>
            <div className='w-[600px] h-[74px] bg-white rounded-[50px] flex flex-row justify-center items-center gap-12'>
                <div className='flex flex-col'>
                    <p className='text-xs'>Who</p>
                    <p className='text-sm opacity-60 font-[400]'>Add guests</p>
                </div>
                <p className='h-[35px] w-[1px] bg-black opacity-20'></p>
                <div className='flex flex-col'>
                    <p className='text-xs'>Who</p>
                    <p className='text-sm opacity-60 font-[400]'>Add guests</p>
                </div>
                <p className='h-[35px] w-[1px] bg-black opacity-20'></p>
                <div className='flex flex-col'>
                    <p className='text-xs'>Who</p>
                    <p className='text-sm opacity-60 font-[400]'>Add guests</p>
                </div>
                <button className='bg-green-800 h-[44px] w-[44px] flex items-center justify-center rounded-full'><img src={search} alt="seacrh_icon" height={16} width={16} /></button>
            </div>
        </div>
    </div>
  )
}

export default LandingSection