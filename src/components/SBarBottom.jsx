import React from "react";

export const SideBarBottom = () => {
  return (
    <div className="w-full h-[11.5vw] mt-[4vw] pb-10 ">
      <div className="teams w-18 rounded-md hover:border-2 hover:bg-[#F4F5F6] border-gray-200 h-1/4 flex">
        <img
          className="h-[1.2vw] mt-2 ml-2 object-cover object-center"
          src="./public/add-user.svg"
          alt=""
        />
        <div className="mt-2 ml-1 text-[.9vw] w-[10vw] font-semibold ">
          Invite teammates
        </div>
      </div>

      <div className="teams w-18 rounded-md hover:border-2 hover:bg-[#F4F5F6] border-gray-200 h-1/4 flex">
        <img
          className="h-[1.2vw] mt-2 ml-2 object-cover object-center"
          src="./public/help.svg"
          alt=""
        />
        <div className="mt-2 ml-1 text-[.9vw] w-[10vw] font-semibold ">
          Invite teammates
        </div>
        <div className=" w-1/5 h-6 mt-1 rounded-md border-2 flex justify-center bg-[#F4F5F6] hover:bg-white text-gray-500 text-xs font-semibold items-center border-gray-200">
          0/6
        </div>
      </div>
      <div className="days w-22 mt-1 rounded-md hover:border-1 hover:bg-[#F4F5F6] border-gray-200 h-1/4 flex">
        <div className=" w-[1.1vw] h-4 mt-2 ml-2 rounded-md border-2 flex justify-center bg-[#F4F5F6] hover:bg-white text-gray-500 text-xs font-semibold items-center border-gray-200">
          7
        </div>
        <div className="mt-[.5vw] ml-1 text-[.9vw] w-[7vw] font-semibold ">
          days left on trail
        </div>
        <div className=" text-xs w-1/3 ml-4 h-7 rounded-md border-2 flex justify-center bg-[#232529] pl-[.1vw]  text-white font-semibold items-center border-gray-200">
          Add biling
        </div>
      </div>
    </div>
  );
};
