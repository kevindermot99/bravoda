import React from "react";
import Sidebar from "../components/Sidebar";
import { LuMic, LuPanelRight, LuPlus } from "react-icons/lu";

function Home() {
  return (
    <div className="flex items-start justify-start h-svh text-text-black dark:text-text-white ">
      <Sidebar />
      <div className="flex-1 min-h-svh p-3 bg-body-light dark:bg-body-dark flex">
        <div className="w-full min-h-full overflow-auto bg-white dark:bg-dark-card rounded-xl">
          <div className="w-full flex items-center justify-between p-3 border-b-[1px] border-stone-100 dark:border-gray-700/20">
            <h1 className="text-sm px-2 font-medium ">Lesson title: Introduction to Linux</h1>
            <div className="flex items-center justify-center gap-1">
              <button className="flex items-center justify-center py-[7px] px-3 rounded-lg tracking-tight font-medium text-text-black/80 dark:text-text-white gap-1 text-sm bg-stone-100 dark:bg-dark-hover-color hover:opacity-80">
                <LuMic className="text-lg"/>
                <p>Lecture mode</p>
              </button>
              <button className="flex items-center justify-center py-[7px] px-3 rounded-lg tracking-tight font-medium text-text-black/80 dark:text-text-white gap-1 text-sm bg-transparent hover:bg-stone-200 dark:hover:bg-dark-hover-color">
                <LuPlus className="text-lg"/>
                <p>Create Lesson</p>
              </button>
              <button className="flex items-center justify-center py-[7px] px-2 rounded-lg tracking-tight font-medium text-text-black/80 dark:text-text-white gap-1 text-sm bg-transparent hover:bg-stone-200 dark:hover:bg-dark-hover-color">
                <LuPanelRight className="text-lg"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
