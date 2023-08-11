import React, { useState } from "react";
import "./style.css";

const Navbar = () => {
  let Links = [
    { name: "Events", link: "/" },
    { name: "Stories", link: "/" },
    { name: "Contact", link: "/" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="md:flex justify-center shadow-md w-full md:z-auto">
      <div className="container md:flex items-center justify-between bg-white py-4">
        <h1 className="font-bold text-2xl cursor-pointer items-center text-black-700 md:px-0 px-8">
          Handle
        </h1>

        <div className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden" onClick={()=>setOpen(!open)}>
          <img
            src={`${open?'./images/close.png':'./images/menu.png'}`}
            alt="menu.png"
            className="menu"
            style={{ width: "25px", height: "25px" }}
          />
        </div>

          <ul className={`md:flex md:items-center md:pb-0 pb-10 absolute md:static text-black md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open? 'top-0  relative':'top-[-490px]'}`}>
            {Links.map((link) => (
              <li key={link.name} className="md:ml-6 text-md md:my-0 my-7">
                <a href={link.link} className="font-semibold duration-500">
                  {link.name}
                </a>
              </li>
            ))}
          <div>
              <button className="text-black font-semibold py-2 px-4 rounded-lg md:ml-2 duration-500">
                Log in
              </button>
              <button className="bg-black text-white font-semibold py-2 px-4 rounded-lg md:ml-2 duration-500">
                Sign up
              </button>
          </div>
          </ul>

        </div>
      </div>
  );
};

export default Navbar;