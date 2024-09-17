import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { LuMic, LuPanelRight, LuPlus } from "react-icons/lu";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="flex items-start justify-start h-svh text-text-black dark:text-text-white ">
      <Sidebar />
      <div className="flex-1 min-h-svh p-3 bg-body-light dark:bg-body-dark flex">
        <div className="w-full min-h-full overflow-auto bg-white dark:bg-dark-card rounded-xl flex flex-col">
          {/* topbar */}
          <div className="w-full flex items-center justify-between p-3 border-b-[1px] border-stone-100 dark:border-gray-700/20">
            <h1 className="text-sm px-2 font-medium ">Dashboard</h1>
            <div className="flex items-center justify-center gap-1">
              <button className="flex items-center justify-center py-[7px] px-3 rounded-lg tracking-tight font-medium text-text-black/80 dark:text-text-white gap-1 text-sm bg-stone-100 dark:bg-dark-hover-color hover:opacity-80">
                <LuMic className="text-lg" />
                <p>Lecture mode</p>
              </button>
              <Link to={'/new'} className="flex items-center justify-center py-[7px] px-3 rounded-lg tracking-tight font-medium text-text-black/80 dark:text-text-white gap-1 text-sm bg-transparent hover:bg-stone-200 dark:hover:bg-dark-hover-color">
                <LuPlus className="text-lg" />
                <p>Create Lesson</p>
              </Link>
              <button className="flex items-center justify-center py-[7px] px-2 rounded-lg tracking-tight font-medium text-text-black/80 dark:text-text-white gap-1 text-sm bg-transparent hover:bg-stone-200 dark:hover:bg-dark-hover-color">
                <LuPanelRight className="text-lg" />
              </button>
            </div>
          </div>
          <div className=" flex-1 w-full flex items-center justify-center flex-col gap-4">
            <div className="h-[100px] w-full max-w-[340px]">
              <img src="./create.svg" className="h-full w-auto opacity-85" />
            </div>
            <p className="text-sm tracking-tight max-w-[340px] text-left opacity-70 font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              alias, nam minima dolorem, pariatur dolore maiores incidunt
              officiis totam voluptas saepe,
            </p>
            <div className="flex items-center justify-start gap-2 w-full max-w-[340px]">
              <Link to={'/new'} className="flex items-center justify-center py-[7px] px-3 rounded-lg tracking-tight font-medium text-white bg-main-color gap-1 text-sm ">
                <LuPlus className="text-lg" />
                <p>Create Lesson</p>
              </Link>
              <button className="flex items-center justify-center py-[7px] px-3 rounded-lg tracking-tight font-medium text-text-black/80 dark:text-text-white gap-1 text-sm bg-stone-100 dark:bg-dark-hover-color hover:opacity-80">
                <p>Documentation</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
