import React from "react";

export const DropDown1 = (props) => {
  const data = [
    {
      id: 1,
      value1: "Roadmap",
    },
    {
      id: 2,
      value1: "Feedback",
    },
    {
      id: 3,
      value1: "Perfomance",
    },
    {
      id: 4,
      value1: "Team",
    },
    {
      id: 5,
      value1: "Analytics",
    },
  ];

  return (
    <>
    {props.listName.map((item) => (
      <div key={item.id} className="group  mt-3 felx font-semibold text-xs">
        <div className="relative rounded-md p-1 hover:border-2 hover:bg-[#F4F5F6] border-gray-200  h-1/4 gap-2 flex">
          <img
            className=" h-[1.2vw] mt-1 object-cover object-center"
            src="./public/folder.svg"
            alt=""
          />
          <div className="mt-1 list-name w-2/3 ">{item.value1}</div>
          <img
            className=" fill-current group-hover:rotate-180 transition-transform h-[1.2vw] mt-1 object-cover object-center"
            src="./public/dropdown.svg"
            alt=""
          />
        </div>
        {/** dropdown items */}
        <div className=" hidden  group-hover:block">
          {data.map((item) => (
            <div
              key={item.id}
              className="ml-2 h-[2vw] relative border-l-2 border-b-2 rounded-b-xl border-gray-300"
            >
              <div className=" bg-white w-full pl-2 absolute left-2 top-4">
                {item.value1}
              </div>
            </div>
          ))}
          <div className="ml-2 h-[2vw] relative border-l-2 border-b-2 rounded-b-xl border-gray-300">
            <div className=" bg-white w-full pl-2 absolute left-2 top-4">
              <img
                className=" inline-block h-[1.2vw] object-cover object-center"
                src="./public/add2.svg"
                alt=""
              />
              <div className="inline-block ml-1 text-[.9vw] w-[10vw] font-semibold text-[#95989B]">
                Add new sub
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
    </>
  );
};
