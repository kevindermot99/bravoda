import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { LuMic, LuPanelRight, LuPlus } from "react-icons/lu";
import { Link } from "react-router-dom";
function NewLesson() {
  const [selectedFormat, setSelectedFormat] = useState("Audio");
  const formats = [
    {
      name: "Audio",
      type: "audio",
    },
    {
      name: "PDF",
      type: "pdf",
    },
    {
      name: "Lecture",
      type: "lecture",
    },
    {
      name: "Youtube URL",
      type: "youtube",
    },
    {
      name: "Paste Text",
      type: "text",
    },
  ];
  return (
    <div className="flex items-start justify-start h-svh text-text-black dark:text-text-white ">
      <Sidebar />
      <div className="flex-1 min-h-svh p-3 bg-body-light dark:bg-body-dark flex">
        <div className="w-full min-h-full overflow-auto bg-white dark:bg-dark-card rounded-xl flex flex-col">
          {/* topbar */}
          <div className="w-full flex items-center justify-between p-3 border-b-[1px] border-stone-100 dark:border-gray-700/20">
            <h1 className="text-sm px-2 font-medium ">Create a new Lesson </h1>
          </div>
          <div className=" flex-1 w-full flex items-start justify-start flex-col gap-4 p-2">
            {/* formats */}
            <div className="w-full h-fit flex gap-2 items-start justify-start">
              {formats.map((format, index) => (
                <button
                  onClick={() => setSelectedFormat(format.name)}
                  className={`min-w-[100px] min-h-[35px] flex items-center justify-center py-2 px-5 font-semibold text-sm rounded-lg ${selectedFormat === format.name ? 'bg-main-color text-wrap' : 'bg-dark-card-2 text-text-white'}`}
                >
                  {format.name}
                </button>
              ))}
            </div>
            {/* form */}
            <form className="flex flex-col" >
              <label>
                <h1>Folder</h1>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewLesson;
