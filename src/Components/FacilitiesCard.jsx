import React from 'react';

const FacilitiesCard = ({ icon, title }) => {
  return (
    <div className="w-[193px] h-[193px] bg-white text-center flex flex-col justify-center items-center gap-5 rounded-[8px] shadow-lg">
      <img src={icon} alt={title} height={40} width={40} />
      <p className="text-[#1C1C1C] text-[16px] w-[139px] h-[28px]">{title}</p>
    </div>
  );
};

export default FacilitiesCard;
