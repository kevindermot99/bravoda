import React from "react";
import { Link, useLocation } from "react-router-dom";

function SidebarLink({ to, icon, name }) {
  const location = useLocation();
  const namelowercase = name.toLowerCase();
  return (
    <Link
      to={to}
      className={`flex items-center justify-start gap-2 w-full h-[30px] mb-1 ${
        namelowercase === "dashboard"
          ? location.pathname === "/" ? "bg-stone-200 dark:bg-dark-hover-color"
          : "hover:bg-stone-200 dark:hover:bg-dark-hover-color"
          : location.pathname === namelowercase
          ? " bg-stone-200 dark:bg-dark-hover-color "
          : " hover:bg-stone-200 dark:hover:bg-dark-hover-color "
      }  rounded-lg px-3`}
    >
      <span className={`text-lg opacity-50 
        ${
          namelowercase === "dashboard"
            ? location.pathname === "/" && "text-main-color opacity-100"
            : location.pathname === namelowercase
            ? "text-main-color opacity-100"
            : ""
        }
        `}>{icon}</span>
      <span className="text-sm font-medium">{name}</span>
    </Link>
  );
}

export default SidebarLink;
