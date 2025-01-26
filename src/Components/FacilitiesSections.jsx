import wifiIcon from '../assets/Images/wifiIcon.png';
import parking from '../assets/Images/parking_Area_Icon.png';
import dumbell from '../assets/Images/DumbellIcon.png';
import elipsis from '../assets/Images/EllipsisIcon.png';
import workspace from '../assets/Images/WorkspaceIcon.png';

import FacilitiesCard from './FacilitiesCard';

const FacilitiesSections = () => {
  // Facility data
  const facilities = [
    { icon: wifiIcon, title: 'High-Speed Wi-Fi' },
    { icon: parking, title: 'Parking Area' },
    { icon: dumbell, title: 'Gym and Fitness' },
    { icon: workspace, title: 'Private Workspace' },
    { icon: elipsis, title: 'Other Services' },
  ];

  return (
    <div className="mt-[300px] absolute w-full h-auto bg-[#025D28] flex flex-col justify-center items-center gap-16 px-4 md:px-0 py-12 rounded-t-[40px]">
      <p className="text-3xl md:text-5xl font-bold text-white tracking-wide text-center">
        We provide top facilities
      </p>
      <div className="w-full flex flex-wrap justify-center items-center gap-8">
        {facilities.map((facility, index) => (
          <FacilitiesCard key={index} icon={facility.icon} title={facility.title} />
        ))}
      </div>
    </div>
  );
};

export default FacilitiesSections;
