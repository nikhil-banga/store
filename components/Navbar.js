/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";
import {
  AiOutlineCloseCircle,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import { useRef,useEffect } from "react";
import { useRouter } from "next/router";
const Navbar = () => {
// const router = useRouter();

// useEffect(() => {
//     router.push(router.pathname+"#top");
// },[])

  const toggleCart = () => {
    // ref.current.classList.add('overflow-x-hidden')
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();
  return (
    <div className="body position-sticky bg-white shadow-md flex flex-col md:flex-row md:justify-start justify-center items-center">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        ></meta>
      </Head>
      <div className=" mt-3.5 mr-6">
        <Link href={"/"}>

        <img
          className="cursor-pointer"
          src="/assests/aapkastorefinal6.png"
          alt="Picture of the author"
          width={150}
          height={40}
          />
          </Link>
      </div>
      <div className="body ">
        <ul className=" flex flex-row items-center  justify-center  space-x-4">
          <Link href={"/"}>
            <a href="">
              <li className="sm:text-sm text-sm lg:text-md hover:font-semibold hover:text-blue-800 cursor-pointer">
              Home
            </li>
              </a>
          </Link>
          <Link href={"/tshirts"}>
            <a href="">
              <li className="sm:text-sm text-sm lg:text-md hover:font-semibold hover:text-blue-800 cursor-pointer">
              T-Shirts
            </li>
              </a>
          </Link>
          <Link href={"/mugs"}>
            <a href="">
              <li className="sm:text-sm text-sm lg:text-md hover:font-semibold hover:text-blue-800 cursor-pointer">
              Mugs
            </li>
              </a>
          </Link>
          <Link href={"/watch"} className="#top">
            <a href="">
              <li className="sm:text-sm text-sm lg:text-md hover:font-semibold hover:text-blue-800 cursor-pointer">
              Watches
            </li>
              </a>
          </Link>
          <Link href={"/hoodies"}>
            <a href="">
              <li className="sm:text-sm text-sm lg:text-md hover:font-semibold hover:text-blue-800 cursor-pointer">
              Hoodies
            </li>
              </a>
          </Link>
        </ul>
      </div>
      <div onClick={toggleCart} className="cart absolute right-10">
        <div>
          <AiOutlineShoppingCart className=" " />
        </div>
      </div>
      <div
        ref={ref}
        className=" sidebar w-72 h-[500rem] absolute top-0 right-0 bg-blue-200 py-10 px-8 transform transition-transform translate-x-full "
      >
        <h2 className="font-bold text-xl">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className=" absolute top-2 right-2 hover:animate-spin-slow cursor-pointer text-2xl text-blue-900 "
        >
          <AiOutlineCloseCircle />
        </span>
        <ol className="list-decimal font-semibold ">
          <li>
            <div className="my-5 flex">
              <div className=" w-2/3 font-semibold  ">
                Aapka Store Cart
              </div>
              <div className=" font-semibold flex items-center justify-center w-1/3">
                <div className="Minus cursor-pointer text-xl text-blue-900">
                  <AiOutlineMinusCircle />
                </div>
                <div className="one mx-2">1</div>
                <div className="plus  cursor-pointer text-xl text-blue-900 ">
                  <AiOutlinePlusCircle />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="my-5 flex">
              <div className=" w-2/3 font-semibold  ">
                Aapka Store Cart
              </div>
              <div className=" font-semibold flex items-center justify-center w-1/3">
                <div className="Minus  cursor-pointer text-xl text-blue-900">
                  <AiOutlineMinusCircle />
                </div>
                <div className="one mx-2">1</div>
                <div className="plus  cursor-pointer text-xl text-blue-900 ">
                  <AiOutlinePlusCircle />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="my-5 flex">
              <div className=" w-2/3 font-semibold  ">
                Aapka Store Cart
              </div>
              <div className=" font-semibold flex items-center justify-center w-1/3">
                <div className="Minus  cursor-pointer text-xl text-blue-900">
                  <AiOutlineMinusCircle />
                </div>
                <div className="one mx-2">1</div>
                <div className="plus  cursor-pointer text-xl text-blue-900 ">
                  <AiOutlinePlusCircle />
                </div>
              </div>
            </div>
          </li>
          <div className="flex">

          <button
            type="button"
            className="text-white flex bg-gradient-to-r from-blue-400 to-blue-700 hover:bg-gradient-to-bl  font-medium rounded-xl text-sm px-3  py-2 text-center m-auto"
          >
            <div className="mr-0.5 mt-0.5">
              <BsBagCheck />
            </div>
            Buy Now
          </button>
          {/* <button
            type="button"
            className="text-white flex bg-gradient-to-r from-blue-400 to-blue-700 hover:bg-gradient-to-bl  font-medium rounded-xl text-sm px-3  py-2 text-center m-auto"
            >
          {/* <button
            type="button"
            className="text-white flex bg-gradient-to-r from-blue-400 to-blue-700 hover:bg-gradient-to-bl  font-medium rounded-lg text-sm px-5  py-2.5 text-center mr-2 mb-2"
            > */}
            {/* Clear Cart
          </button> */} 
            </div>
        </ol>
      </div>
    </div>
  );
};
export default Navbar;