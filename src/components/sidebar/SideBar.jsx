import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/svg/logo.svg";
import menu from "../../assets/svg/menu.svg";
import proileImage from "../../assets/svg/user-profile.svg";
import { SearchInput, Featurecard } from "../";
import { BorderLine } from "../../ui-elements";

import {
  HomeIcon,
  SettingsIcon,
  UsersIcon,
  BarChartIcon,
  LayerIcon,
  CheckIcon,
  LifeBuoyIcon,
  LogOutIcon,
} from "../../assets/svg-components";

const SideBar = () => {
  const navElements = [
    {
      name: "Home",
      link: "/",
      image: <HomeIcon />,
    },
    {
      name: "Dashboard",
      link: "dashboard",
      image: <BarChartIcon />,
    },
    {
      name: "Projects",
      link: "Projects",
      image: <LayerIcon />,
    },
    {
      name: "Tasks",
      link: "tasks",
      image: <CheckIcon />,
    },
    {
      name: "Users",
      link: "users",
      image: <UsersIcon />,
    },
    {
      name: "Support",
      link: "support",
      image: <LifeBuoyIcon />,
    },
    {
      name: "Settings",
      link: "settings",
      image: <SettingsIcon />,
    },
  ];
  const closeSidebar = ()=>{
    document.querySelector('.main-content').style.transform = 'scale(1) translateX(0)'
    setTimeout(()=>{
        document.body.classList.remove('open-sidebar')
        document.querySelector('.main-content').style = ''
    },500)

    
}
  return (
    <div className="h-screen w-full lg:w-[17.5rem] bg-sideBar flex flex-col   flex-start fixed top-0 z-[100] p-sm overflow-y-scroll">
      <div className="flex items-center justify-between">
        <img src={logo} alt="" />
        <div className="sidebar-close  cursor-pointer block md:hidden">
         
          {/* <span onClick={closeSidebar}>x</span> */}
        </div>
      </div>
      <div>
        <SearchInput />
      </div>
      <div className="flex flex-col flex-start grow-1 mt-5 ml-2">
        {navElements.map((element) => (
          <div onClick={closeSidebar} className="flex flex-start mb-[2rem] gap-4 last:mt-auto">
            <span>{element.image}</span>
            <span className="text-sm font-normal">
              <NavLink
                to={element.link}
                className={({ isActive }) =>
                  isActive ? "bg-sidebarActive" : "bg-sideBar"
                }
              >
                {element.name}
              </NavLink>
            </span>
          </div>
        ))}
      </div>
      <div className="ml-2">
        <Featurecard />
      </div>
      <BorderLine />
      <div className="ml-2 flex items-start gap-2">
        <img src={proileImage} alt="user" />
        <div className="text-xsm">
          <h6 className="text-[#101828] font-normal">Olivia Rhye</h6>
          <p className="text-[##667085] font-light">olivia@untitledui.com</p>
        </div>
        <LogOutIcon />
      </div>
    </div>
  );
};

export default SideBar;
