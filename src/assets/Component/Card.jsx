import { motion } from "framer-motion";
import React from "react";
import { VscArrowSmallRight } from "react-icons/vsc";
function Card({ width, start, para }) {
  return (
    <motion.div whileHover={{padding: "25px"}} className={` bg-zinc-800 p-5 rounded-xl hover:bg-violet-600 ${width}`}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>one heading</h3>
          <VscArrowSmallRight />
        </div>
        <h1 className="text-3xl font-medium mt-5">Whatever heading.</h1>
      </div>
      <div className="w-full mt-32">
        {start === true && (
          <div>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              start a project
            </h1>
            <button className="rounded-full py-2 px-5 mt-5 border-[1px] border-zinc-400">
              Contact Us
            </button>
          </div>
        )}
        {para === true && (
          <div>
            <p className="text-sm text-zinc-500 font-medium">
              Lorem ipsum, dolor sit amet deserunt.{" "}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
