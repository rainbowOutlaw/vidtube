import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-2 m-2">
      <div className="col-span-1 flex gap-2">
        <img
          className="h-10"
          alt="hamburger menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />
        <img
          className="h-10"
          alt="youtube icon"
          src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
        />
      </div>
      <div className="col-span-10 flex justify-center">
        <input
          type="text"
          className="w-1/2 py-1 pl-4 rounded-l-full border-[1px] border-gray-300"
        />
        <button className="rounded-r-full bg-gray-100 py-3 p-4 hover:bg-gray-200">
          Search
        </button>
      </div>
      <div className="col-span-1 w-5 pt-2">
        <img
          alt="user icon"
          src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
        />
      </div>
    </div>
  );
};

export default Head;
