import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const Breadcrumb = ({ data }) => {
  function isLast(index) {
    return data.length - 1 === index;
  }

  return (
    <>
      <nav className="flex py-7">
        <ol className="inline-flex items-center">
          {data.map((link, index) => (
            <li key={index}>
              <div className="flex items-center">
                <a href="#" className=" text-sm  text-gray-700  ">
                  {link}
                </a>
                {!isLast(index) && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3 h-3 text-black font-medium"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                )}
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;
