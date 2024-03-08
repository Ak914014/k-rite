import React from "react";
import Main from "./Table/Main.jsx";

export const Product = () => {
  return (
    <div className="Main-container">
      {/** Heading and search bar  */}
      <div className="nav-bar w-full h-[3vw] felx p-3">
        <h1 className="text-[1.5vw] inline-block w-2/3 ">Products</h1>
        <div className="search-bar ml-10 inline-block felx  border-2 border-gray-100 rounded-md w-[15vw] ">
          <img
            className=" inline-block ml-1 h-[1.2vw] object-cover object-center"
            src="./public/search.svg"
            alt=""
          />
          <input
            type="text"
            className="ml-1 font-semibold text-xs"
            placeholder="Search for..."
          />
        </div>
        <img
          className="ml-5 inline-block p-1 w-[1.9vw] border-2 border-gray-100 rounded-md object-cover object-center"
          src="./public/chat.svg"
          alt=""
        />
        <img
          className="ml-5 inline-block p-1 w-[1.9vw] border-2 border-gray-100 rounded-md object-cover object-center"
          src="./public/settings.svg"
          alt=""
        />
      </div>

      {/**Tool bar */}
      <div className="tool-bar w-full  felx border-t-2 border-b-2 p-2 justify-center border-gray-100 mt-5 ">
        <div className="group inline-block w-[9vw] h-10 rounded-xl border-2 border-gray-100 felx font-semibold text-xs">
          <div className="relative rounded-xl  h-10 p-1  hover:bg-[#F4F5F6]  gap-2 flex">
            <img
              className=" h-[1.2vw] mt-1 object-cover object-center"
              src="./public/brands.svg"
              alt=""
            />
            <div className="mt-1 list-name w-2/3 ">All brands</div>
            <img
              className=" fill-current group-hover:rotate-180 transition-transform h-[1.2vw] mt-1 object-cover object-center"
              src="./public/dropdown.svg"
              alt=""
            />
          </div>
        </div>
        <div className="group p-1 ml-2 w-[5vw] inline-block h-10 rounded-xl border-2 border-gray-100 felx font-semibold text-xs">
          <div className="relative rounded-xl  h-10 p-1   flex">
            <div className="mt-1 list-name w-2/3 ">Desk</div>
            <img
              className=" fill-current group-hover:rotate-180 transition-transform h-[1.2vw] mt-1 object-cover object-center"
              src="./public/dropdown.svg"
              alt=""
            />
          </div>
        </div>
        <div className="group p-1 ml-2 w-[5vw] inline-block h-10 rounded-xl border-2 border-gray-100 felx font-semibold text-xs">
          <div className="relative rounded-xl  h-10  flex">
            <div className="mt-2 list-name w-2/3 ">Tags</div>
            <img
              className=" fill-current group-hover:rotate-180 transition-transform h-[1.2vw] mt-1 object-cover object-center"
              src="./public/dropdown.svg"
              alt=""
            />
          </div>
        </div>
        <div className="group p-1 ml-2 w-[5vw] inline-block h-10 rounded-xl border-dotted border-2 border-gray-200felx font-semibold text-xs">
        <div className="relative rounded-xl  h-10  flex">
         
          <img
            className=" fill-current mt-1 h-[1.2vw]  object-cover object-center"
            src="./public/sorting.svg"
            alt=""
          />
          <div className="mt-1 ml-1 list-name w-2/3 text-gray-500 ">Sort</div>
        </div>
      </div>
      <div className="group p-1 ml-2 w-[5vw] inline-block h-10 rounded-xl border-dotted border-2 border-gray-200 felx font-semibold text-xs">
        <div className="relative rounded-xl  h-10  flex">
         
          <img
            className=" fill-current mt-1 h-[1.2vw]  object-cover object-center"
            src="./public/filter.svg"
            alt=""
          />
          <div className="mt-1 ml-1 list-name w-2/3 text-gray-500 ">Filter</div>
        </div>
      </div>
      <div className="group p-1 ml-[32vw] w-[5vw] inline-block h-10 rounded-xl border-2 border-gray-200 felx font-semibold text-xs">
      <div className="relative rounded-xl  h-10  flex">
       
        <img
          className=" fill-current mt-1 h-[1.2vw]  object-cover object-center"
          src="./public/filter.svg"
          alt=""
        />
        <div className="mt-1 ml-1 list-name w-2/3 text-gray-500 ">Filter</div>
      </div>
    </div>
    <div className="group p-1 ml-2 w-[5vw] inline-block h-10 rounded-xl border-2 border-gray-200 felx font-semibold text-xs">
    <div className="relative rounded-xl  h-10  flex">
     
      <img
        className=" fill-current mt-1 h-[1.2vw]  object-cover object-center"
        src="./public/filter.svg"
        alt=""
      />
      <div className="mt-1 ml-1 list-name w-2/3 text-gray-500 ">Filter</div>
    </div>
  </div>
      </div>

       {/** Table */}
       <div className=" -mt-10" >
       <Main/>
       </div>

    </div>
  );
};
