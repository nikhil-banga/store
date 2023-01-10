/* eslint-disable @next/next/no-img-element */
import React from "react";
// import a from "next/a";
import Link from "next/link";
const Store = (props) => {
  return (
    <div className="m-auto  p-auto">
      <section className="text-gray-600 body-font">
        <div className="">
          <div className="">
            <Link href={"product/aapka-store-is-working-for-you"}>
              {/* <div className="lg:w-1/5  m-5 md:w-1/2 w-full p-8 shadow-md justify-center items-center "> */}
              <div className="p-10 mt-16 shadow-md justify-center items-center ">
                <a className="items-center block rounded overflow-hidden justify-center">
                  <img
                    // className={`m-auto w-96 h-[${props.heightphone}] md:h-[${props.height}] `}
                    className={`m-auto w-auto  h-[${props.heightphone}] md:h-[${props.height}]`}
                    // className={`m-auto w-[${props.widthphone}] md:h-[${props.width}] h-[${props.heightphone}] md:h-[${props.height}]`}
                    // className={`m-auto w-48 md:w-60 h-auto`}
                    src={props.image}
                    alt="Picture of the author"
                  />
                </a>

                <div className="mt-4 text-center md:text-left">
                  <h3 className="text-gray-500  text-xs tracking-widest title-font mb-1">
                    {props.tagline}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {props.productname}
                  </h2>
                  <p className="mt-1">{props.price}</p>
                  <p className="mt-1">{props.size}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Store;
