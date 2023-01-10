import React from "react";
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="fixed inset-x-0 body py-2 shadow-md ">
      <ul className="fixed  flex flex-row ">
        <div className="mr-7 cursor-pointer">

        <Image 
        //   loader={myLoader}
        src="/assests/aapkastorefinal6.png"
        alt="Picture of the author"
        width={150}
        height={40}
        />

        </div>
        <li className="mx-4  cursor-pointer my-1.5">Home</li>
        <li className="mx-4 cursor-pointer my-1.5">About</li>
        <li className="mx-4 cursor-pointer my-1.5">Orders</li>
        <li className="mx-4 cursor-pointer my-1.5">Log Out</li>
      </ul>
    </div>
  );
};

export default Navbar;
