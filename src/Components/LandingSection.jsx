import bg from '../assets/Images/Hero_Bg_Image.png'
import search from '../assets/Images/Search_icon.png'

const LandingSection = () => {
  return (
    <div className="lg:h-full h-screen w-full">
      <img src={bg} alt="Hero_Bg_Image" className='top-0 left-0 w-full h-full object-cover' />
      <div className='lg:-mt-[610px] -mt-[650px] z-10 w-full h-full flex justify-center items-center flex-col gap-8 px-4 text-center'>
        <p className='text-3xl sm:text-4xl md:text-5xl lg:text-[65px] font-bold text-white leading-tight max-w-[90%]'>Where Paradise Feels Like Home</p>
        <div className='w-full max-w-[90%] sm:max-w-[600px] h-auto sm:h-[74px] bg-white lg:rounded-full rounded-2xl flex flex-col sm:flex-row justify-between items-center px-12 py-4 sm:py-0 gap-4 sm:gap-6 shadow-md'>
          <div className='flex flex-col text-center lg:items-start w-full sm:w-auto'>
            <p className='text-xs'>Who</p>
            <p className='text-sm opacity-60 font-normal'>Add guests</p>
          </div>
          <div className='h-[1px] sm:h-[35px] w-full sm:w-[1px] bg-black opacity-20'></div>
          <div className='flex flex-col text-center lg:items-start w-full sm:w-auto'>
            <p className='text-xs'>Check in</p>
            <p className='text-sm opacity-60 font-normal'>Add dates</p>
          </div>
          <div className='h-[1px] sm:h-[35px] w-full sm:w-[1px] bg-black opacity-20'></div>
          <div className='flex flex-col text-center lg:items-start w-full sm:w-auto'>
            <p className='text-xs'>Check out</p>
            <p className='text-sm opacity-60 font-normal'>Add Dates</p>
          </div>
          <button className='bg-green-800 h-10 w-10 sm:h-11 sm:w-11 flex items-center justify-center rounded-full'>
            <img src={search} alt="search_icon" className='w-4 h-4' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default LandingSection
