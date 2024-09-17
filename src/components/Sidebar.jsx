import React, { useState, useEffect } from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import {
  LuPenSquare,
  LuSearch,
  LuSun,
  LuMoon,
  LuLaptop2,
  LuInbox,
  LuBookCopy,
  LuBookOpen,
  LuSettings,
  LuCrown,
  LuFolderClosed,
} from "react-icons/lu";
import { ConfigProvider, Dropdown } from "antd";
import SidebarLink from "./SidebarLink";
import { useLocation } from "react-router-dom";

// Theme configuration
const lightTheme = {
  colorPrimary: "#581c87",
  colorTextBase: "#111111",
  colorBgBase: "#ffffff",
};

const darkTheme = {
  colorPrimary: "#581c87",
  colorTextBase: "#f0f0f0",
  colorBgBase: "#101012",
};

const SystemtTheme = {
  colorPrimary: "#581c87",
  colorTextBase: "#111111",
  colorBgBase: "#ffffff",
}

const getStoredTheme = () => {
  return localStorage.getItem("theme") || "system";
};

const applyTheme = (theme) => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else if (theme === "light") {
    document.documentElement.classList.remove("dark");
  } else {
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    document.documentElement.classList.toggle("dark", systemPrefersDark);
  }
};

const storeTheme = (theme) => {
  localStorage.setItem("theme", theme);
};

function Sidebar() {
  const [defaultTheme, setDefaultTheme] = useState(getStoredTheme());
  const location = useLocation()

  useEffect(() => {
    applyTheme(defaultTheme);
    if (defaultTheme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleSystemThemeChange = (e) => {
        applyTheme(e.matches ? "dark" : "light");
      };
      mediaQuery.addEventListener("change", handleSystemThemeChange);
      return () =>
        mediaQuery.removeEventListener("change", handleSystemThemeChange);
    }
  }, [defaultTheme]);

  const handleThemeChange = (theme) => {
    setDefaultTheme(theme);
    storeTheme(theme);
    applyTheme(theme);
  };

  const items = [
    {
      key: "1",
      label: (
        <button
          className="flex items-center justify-start gap-2 w-full"
          onClick={() => handleThemeChange("light")}
        >
          <span className="text-lg">
            <LuSun />
          </span>
          <span>Light Mode</span>
        </button>
      ),
    },
    {
      key: "2",
      label: (
        <button
          className="flex items-center justify-start gap-2 w-full"
          onClick={() => handleThemeChange("dark")}
        >
          <span className="text-lg">
            <LuMoon />
          </span>
          <span>Dark Mode</span>
        </button>
      ),
    },
    {
      key: "3",
      label: (
        <button
          className="flex items-center justify-start gap-2 w-full"
          onClick={() => handleThemeChange("system")}
        >
          <span className="text-lg">
            <LuLaptop2 />
          </span>
          <span>System</span>
        </button>
      ),
    },
  ];

  return (
    <div className="w-[250px] min-w-[250px] h-svh flex flex-col items-start justify-between bg-body-light dark:bg-body-dark py-3 pl-3 tracking-tight text-text-black dark:text-text-white overflow-y-auto">
      {/* Sidebar content */}
      <div className="flex flex-col w-full">
        {/* User info */}
        <div className="flex items-center justify-between gap-1 w-full p-1">
          <div className="flex h-[35px] items-center text-sm hover:bg-stone-200 dark:hover:bg-dark-hover-color pr-2 p-1 rounded-lg cursor-pointer">
            <button className="h-full aspect-square bg-main-color text-white rounded-lg flex items-center justify-center font-bold text-xs">
              TH
            </button>
            <p className="mb-0 font-medium pl-1">Thierry</p>
            <IoChevronDownSharp className="text-xs ml-[2px]" />
          </div>
          {/* Search and create */}
          <div className="flex items-center">
            <button className="h-[30px] aspect-square rounded-lg opacity-50 hover:opacity-100 hover:bg-stone-200 dark:hover:bg-dark-hover-color text-lg flex items-center justify-center">
              <LuSearch />
            </button>
            <button className="h-[30px] aspect-square rounded-lg opacity-50 hover:opacity-100 hover:bg-stone-200 dark:hover:bg-dark-hover-color text-lg flex items-center justify-center">
              <LuPenSquare />
            </button>
          </div>
        </div>
        {/* Links */}
        <div className="flex flex-col gap-0 py-2">
          <SidebarLink to={"/"} icon={<LuInbox />} name="Dashboard" />
          <SidebarLink to={"/"} icon={<LuBookCopy />} name="Library" />
        </div>
        {/* Other sections */}
        <h1 className="text-xs font-semibold capitalize mt-2 px-1 opacity-50 ">
          Workspace
        </h1>
        <div className="flex flex-col gap-0 py-2">
          <SidebarLink to={"/"} icon={<LuBookOpen />} name="My Lessons" />
          <SidebarLink to={"/"} icon={<LuSettings />} name="Settings" />
          <SidebarLink to={"/"} icon={<LuCrown />} name="Try Premium" />
        </div>
        <h1 className="text-xs font-semibold capitalize mt-2 px-1 opacity-50 ">
          Management
        </h1>
        <div className="flex flex-col gap-0 py-2">
          <SidebarLink to={"/"} icon={<LuSettings />} name="Settings" />
          <SidebarLink to={"/"} icon={<LuCrown />} name="Try Premium" />
        </div>
        <h1 className="text-xs font-semibold capitalize mt-2 px-1 opacity-50 ">
          Last 7 days Lessons
        </h1>
        <div className="flex flex-col gap-0 py-2">
          <SidebarLink
            to={"/"}
            icon={<LuFolderClosed />}
            name="Intro to Linux"
          />
          <SidebarLink
            to={"/"}
            icon={<LuFolderClosed />}
            name="Version Control"
          />
          <SidebarLink
            to={"/"}
            icon={<LuFolderClosed />}
            name="Gender Balance"
          />
        </div>
      </div>
      {/* Theme Selector */}
      <div className="h-fit w-full flex flex-col">
        <ConfigProvider
          theme={{ token: defaultTheme === "light" ? lightTheme : defaultTheme === "dark" ? darkTheme : SystemtTheme }}
        >
          <Dropdown menu={{ items }} trigger={["click"]}>
            <button className="flex items-center justify-start gap-2 w-full h-[30px] hover:bg-stone-200 dark:hover:bg-dark-hover-color rounded-lg px-3">
              <span className="text-lg opacity-50">
                <LuSun />
              </span>
              <span className="text-sm font-medium">Theme</span>
            </button>
          </Dropdown>
        </ConfigProvider>
      </div>
    </div>
  );
}

export default Sidebar;
