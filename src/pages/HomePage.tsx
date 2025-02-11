import React from "react";
import { FaArrowDown } from "react-icons/fa";

const CardPage: React.FC = () => {
  return (
    <div>
  
      <div className="w-[100%] h-[807px] top-[51px] left-[-123px] bg-[#FFD59E] text-black flex items-center justify-center">
        {/* <div className="w-[587px] h-[574px] top-[65px] left-[84px] bg-white">

        </div>
        <div className="w-[351px] h-[39px] top-[718px] left-[198px] border-1 border-black">

        </div>
        <div className="w-[386px] h-[386px] top-[268px] left-[795px] rounded-[20px] bg-white">
          <h1>Animals Title - Name</h1>
          <button className="w-[Hug(120px)] h-[Hug(48px)] top-[606px] left-[795px] rounded-[20px] bg-red">
            Buy Me
          </button>
        </div> */}
        <div className="w-[78px] h-[80px] absolute top-[778px] left-[657px] bg-white rounded-full shadow-lg flex items-center justify-center">
          <FaArrowDown className="text-black text-xl" />
        </div>
      </div>

     
      <div className="w-full h-[600px] flex items-center justify-center">
        <div className="w-[70%] h-[544px] top-[876px] p-20 rounded-[20px]  mx-auto border-1 border-black">
          <h1>Popular Animals</h1>
          <p>top-5</p>
        </div>
      </div>
    </div>
  );
};

export default CardPage;


