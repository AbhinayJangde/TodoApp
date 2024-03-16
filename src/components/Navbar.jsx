import React from 'react'
import logo from "../assets/logo.png"
const Navbar = () => {
    return (
        <header className="text-black font-semibold body-font bg-white sticky top-0 shadow-md">
            <div
                className=""
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    height: 2,
                    background: "transparent",
                    zIndex: 99999999999,
                    width: "100%"
                }}
            >
                <div
                    className=""
                    style={{
                        height: "100%",
                        background: "#f11946",
                        transition: "all 500ms ease",
                        width: "0%"
                    }}
                >
                    <div
                        style={{
                            boxShadow:
                                "rgb(241, 25, 70) 0px 0px 10px, rgb(241, 25, 70) 0px 0px 5px",
                            width: "5%",
                            opacity: 1,
                            position: "absolute",
                            height: "100%",
                            transition: "all 500ms ease 0s",
                            transform: "rotate(3deg) translate(0px, -4px)",
                            left: "-10rem"
                        }}
                    />
                </div>
            </div>
            <div className="flex px-3 py-2 flex-col md:flex-row justify-between bg-gray-700">
                <div className="flex flex-col md:flex-row text-sm">
                    <a
                        className="flex title-font font-medium items-center text-gray-900 mb-1 md:mb-0"
                        href="/"
                        previewlistener="true"
                    >
                        {/* <img
                            alt=""
                            src={logo}
                            width={100}
                            height={100}
                            decoding="async"
                            data-nimg={1}
                            className="w-14 rounded-full"
                            loading="lazy"
                            style={{ color: "transparent" }}
                        /> */}
                        <span className="ml-3 text-xl text-white hover:text-green-400">
                            Todo App
                        </span>
                    </a>
                    <nav
                        id="menuid"
                        className="md:visible md:flex flex-col md:flex-row items-end md:items-center hidden"
                    >
                        {/*
        <a
          className="ml-4 mr-4 my-1 hover:text-gray-900 hover:border-b-2 hover:border-black"
          href="/"
          previewlistener="true"
        >
          डैशबोर्ड
        </a>
        <a
          className="mr-4 my-1 hover:text-gray-900 hover:border-b-2 hover:border-black"
          href="/khoj"
          previewlistener="true"
        >
          छत्तीसगढ़ी शब्दकोश
        </a>
        <a
          className="mr-4 my-1 hover:text-gray-900 hover:border-b-2 hover:border-black"
          href="/"
          previewlistener="true"
        >
          साहित्य पुस्तक
        </a>
         <a
          className="mr-4 my-1 hover:text-gray-900 hover:border-b-2 hover:border-black"
          href="/"
          previewlistener="true"
        >
          वीडियो
        </a>
        <a
          className="mr-4 my-1 hover:text-gray-900 hover:border-b-2 hover:border-black"
          href="/"
          previewlistener="true"
        >
          लोक कलाकार
        </a>
        <a
          className="block md:hidden mr-4 my-1 hover:text-gray-900 hover:border-b-2 hover:border-black"
          href="/"
          previewlistener="true"
        >
          नए शब्द जोड़े सुझाव दे
        </a>
        <a
          className="mr-4 my-1 hover:text-gray-900 hover:border-b-2 hover:border-black"
          href="/"
          previewlistener="true"
        >
          हमारे बारे में
        </a> */}
                    </nav>
                </div>
                <div className="flex absolute top-3 md:top-[3px] right-2">
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 16 16"
                        className="cursor-pointer mt-1 mr-2 text-3xl"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 13V2a6 6 0 1 1 0 12z" />
                    </svg>
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 20 20"
                        id="open"
                        className="cursor-pointer text-4xl md:hidden block"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={0}
                        viewBox="0 0 15 15"
                        id="close"
                        className="cursor-pointer text-4xl md:hidden hidden"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
            </div>
        </header>

    )
}

export default Navbar