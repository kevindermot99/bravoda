import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { LuMic, LuPanelRight, LuPlus } from "react-icons/lu";
import { Link } from "react-router-dom";
function NewLesson() {
  return (
    <div className="flex items-start justify-start h-svh text-text-black dark:text-text-white ">
      <Sidebar />
      <div className="flex-1 min-h-svh p-3 bg-body-light dark:bg-body-dark flex">
        <div className="w-full min-h-full overflow-auto bg-white dark:bg-dark-card rounded-xl flex flex-col">
          {/* topbar */}
          <div className="w-full flex items-center justify-between p-3 border-b-[1px] border-stone-100 dark:border-gray-700/20">
            <h1 className="text-sm px-2 font-medium ">Create a new Lesson </h1>
          </div>
          <div className=" flex-1 w-full flex items-center justify-center flex-col gap-4">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewLesson;
