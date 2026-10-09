import { Bell, MessageSquare } from 'lucide-react';
import logo from "../../assets/logo.svg"
import logoshort from "../../assets/short-logo.svg"


const TopNavbar = ({ userName, userRole, onMessageClick }) => {
  return (
    <div className="bg-[#f6f6f4] rounded-2xl py-4 px-6 mt-4 mx-4 flex justify-between items-center ">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className='w-40 md:block hidden' ></img>
        <img src={logoshort} alt="Logo" className='w-10 md:hidden block' ></img>
      </div>
      <div className="flex items-center gap-5">
        {userRole !== "Admin" && (
          <div className="relative bg-[#4361ee]/20 p-2.5 rounded-full text-[#343434] cursor-pointer" onClick={onMessageClick}>
            <MessageSquare size={20} />
          <span className="absolute top-2 right-2.5 block h-2.5 w-2.5 rounded-full bg-[#4361ee] ring-1 ring-white"></span>
          </div>
        )}
        <div className="relative bg-[#4361ee]/20 p-2.5 rounded-full text-[#343434] cursor-pointer ">
          <Bell size={20} />
          <span className="absolute top-2 right-2.5 block h-2.5 w-2.5 rounded-full bg-[#4361ee] ring-1 ring-white"></span>
        </div>
        <img 
          src={`https://randomuser.me/api/portraits/men/9.jpg`} 
          alt="Profile" 
          className="w-10 h-10 rounded-full border-2 border-white shadow-md cursor-pointer"
          title={userName}
        />
      </div>
    </div>
  );
};

export default TopNavbar;
