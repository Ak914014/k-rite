import React from "react";
import { DropDown1 } from "./DropDown1";
import { SideBarBottom } from "./SBarBottom.jsx";
import { Product } from "./Product.jsx";

export const Products2 = () => {
  const listNames = [
    { id: 1, value1: "Products" },
    { id: 2, value1: "Sales" },
    { id: 3, value1: "Design" },
    { id: 4, value1: "Office" },
    { id: 5, value1: "Legal" },
  ];

  const data = [
    {
      id: 1,
      value1: "./public/pen.svg",
      value2: "Desgine team",
      value3: "X+1",
    },
    {
      id: 2,
      value1: "./public/speaker.svg",
      value2: "Marketing team",
      value3: "X+2",
    },
    {
      id: 3,
      value1: "./public/code.svg",
      value2: "Development team",
      value3: "X+3",
    },
  ];
  return (
    <div className="main-container flex tracking-tight p-2 h-screen overflow-hidden gap-2 w-full">
      {/* side bar */}
      <div className="side-bar w-1/5 border-2 border-gray-100 rounded-xl p-2">
        <div className="h-[2vw] flex">
          <img
            className="h-[2.5vw] object-cover object-center"
            src="./public/flickr.svg"
            alt=""
          />
          <div className="ml-2 leading-4 ">
            <div className=" text-[.8vw] text-gray-500">INC</div>
            <div className="">InnovateHub</div>
          </div>
          <img
            className="ml-12 mt-2 h-[2vw] w-[2.5vw] border-2 border-gray-100 rounded-full object-cover object-center"
            src="./public/userImg.jpg"
            alt=""
          />
        </div>

        {/* Teams*/}

        <div className=" border-2 border-gray-100 h-1/4 mt-5 rounded-xl p-1">
          {data.map((item) => (
            <div
              key={item.id}
              className="teams w-18 rounded-md hover:border-2 hover:bg-[#F4F5F6] border-gray-200 h-1/4 flex"
            >
              <img
                className="h-[1.2vw] mt-2 ml-2 object-cover object-center"
                src={item.value1}
                alt=""
              />
              <div className="mt-2 ml-1 text-[.9vw] w-[10vw] font-semibold ">
                {item.value2}
              </div>
              <div className=" count-teams  w-1/5 h-6 mt-1 rounded-md border-2 flex justify-center bg-[#F4F5F6] hover:bg-white text-gray-500 text-xs font-semibold items-center border-gray-200">
                {item.value3}
              </div>
            </div>
          ))}
          <div className="w-18 border-t-[.1vw]  hover:rounded-md hover:border-2 hover:bg-[#F4F5F6] border-gray-200  h-1/4   flex">
            <img
              className="  h-[1.2vw] mt-2 ml-2 object-cover object-center"
              src="./public/add3.svg"
              alt=""
            />
            <div className="mt-2 ml-1 text-[.9vw] w-[10vw] font-semibold text-[#95989B]">
              Create team
            </div>
          </div>
        </div>
        {/* folders*/}
        <div className="folders p-3">
          <div className="add-folder flex gap-28 w-full ">
            <div className=" text-xs mt-2 text-[#95989B] font-semibold">FOLDERS</div>
            <div className=" text-xl text-[#95989B] font-semibold">+</div>
          </div>
          <DropDown1 listName={listNames} />
          <SideBarBottom/>
        </div>
      </div>
      {/* Product container*/}
      <div className="w-5/6 border-2 border-gray-100 rounded-xl ">
        <Product/>
      </div>
    </div>
  );
};
