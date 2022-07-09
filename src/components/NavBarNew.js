/* eslint-disable no-restricted-globals */
import React, { Fragment, useState, useEffect } from "react";
// import {Tooltip} from "react-bootstrap";
import clsx from "clsx";
import { Menu, Transition } from "@headlessui/react";

import LogoBlue from "../assets/general/HarborLogoBlue.svg";
import DropdownIcon from "../assets/general/arrow-down.svg";
import GlobalIcon from "../assets/general/global.svg";
import LogoText from "../assets/general/HarborLogoTextWhite.svg";
import LogoBlackText from "../assets/general/HarborLogoTextBlack.svg";
import Hamburger from "../assets/general/hamburger.svg";
import { Link } from "react-router-dom";


// const renderComingSoonTooltip = (props) => (
//   <Tooltip id="button-tooltip" {...props}>
//     Coming Soon!
//   </Tooltip>
// );

function NavBarNew(props) {
  const [screenHeight, setScreenHeight] = useState(0);
  const [fullBg, setFullBg] = useState(false);
  const detectHeight = () => {
    setScreenHeight(window.innerHeight);
    console.log("Height ",screenHeight);
  }
  useEffect(() => {
    window.addEventListener("load", detectHeight);
    return () => window.removeEventListener("load", detectHeight);
  });

  const handleScroll = () => { 
    if(window.pageYOffset > (screenHeight - 100)){
      setFullBg(true);
      console.log("Show full background")
    } else {
      setFullBg(false);
       console.log("hald background");
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  
  const navs = [
      {
          title: "Games", path: "#", isDropDown: true, children: [
              {title: "Loyalty", path: "/loyalty"},
              {title: "Leena's Place", path: "/leena"},
          ],
      },
      { title: "Staking", path: "#", isDropDown: false, },
      { title: "Marketplace", path: "#", isDropDown: false, },
      { title: "Governance", path: "#", isDropDown: false, },
      { title: "Roadmap", path: "#", isDropDown: false, },
      { title: "FAQ", path: "#", isDropDown: false, },
  ]

  const buttons = [
    
    {
      title: "Download",
      path: "#",
      isDropDown: true,
      children: [{ title: "As", path: "#" }],
      hasPrefix: false,
    },
    {
      title: "Login",
      path: "#",
      isDropDown: false,
      isButton: true,
      isOutline: true,
    },
    {
      title: "Register",
      path: "#",
      isDropDown: false,
      isButton: true,
      isOutline: false,
    },
  ];

  const lang = {
      title: "EN",
      path: "#",
      isDropDown: true,
      children: [{ title: "English", path: "#" }],
      hasPrefix: true,
      prefixIcon: GlobalIcon,
      isButton: false,
    }

  return (
    <nav
      className={clsx(
        "tw-fixed tw-z-50 tw-flex tw-justify-between tw-w-screen tw-transition-all duration-1000 tw-linear tw-h-15 tw-px-10 tw-py-3.7",
        { "tw-bg-darker": fullBg, "tw-bg-transparent": !fullBg }
      )}
    >
      <div className="tw-brand tw-flex tw-w-26 tw-justify-between">
        <img src={LogoBlue} alt="Harbor Logo" />
        <img
          src={fullBg ? LogoText : LogoBlackText}
          alt="Harbor Text"
          className="h-3.5 my-auto tw-stroke-red-400"
        />
      </div>

      <div className="tw-hidden lg:tw-flex tw-flex-grow tw-h-7.5">
        {fullBg ? (
          <div className="tw-w-full tw-h-full tw-flex tw-justify-between tw-ml-5">
            <Menu as="div" className="tw-relative tw-flex ">
              {navs.map((nav, index) => {
                if (nav.isDropDown) {
                  return (
                    <div key={index}>
                      <Menu.Button className="tw-flex tw-justify-center tw-items-center tw-h-full tw-rounded-md tw-text-sm tw-font-inter tw-bg-opacity-20 tw-font-medium tw-text-white hover:tw-bg-opacity-30 focus:tw-outline-none focus-visible:tw-outline-none">
                        {nav.title}
                        <img
                          src={DropdownIcon}
                          alt="Dropdown Icon"
                          className="tw-w-4 tw-h-4 tw-ml-0.5 tw-mt-0.5"
                        />
                      </Menu.Button>
                      <Transition
                        as={Fragment}
                        enter="tw-transition tw-ease-out tw-duration-100"
                        enterFrom="tw-transform tw-opacity-0 tw-scale-95"
                        enterTo="tw-transform tw-opacity-100 tw-scale-100"
                        leave="tw-transition tw-ease-in tw-duration-75"
                        leaveFrom="tw-transform tw-opacity-100 tw-scale-100"
                        leaveTo="tw-transform tw-opacity-0 tw-scale-95"
                      >
                        <Menu.Items className="tw-absolute tw-left-0 tw-mt-1 tw-text-sm tw-w-max tw-origin-top-right tw-divide-y tw-divide-gray-100 tw-rounded-md tw-bg-white tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none">
                          <div className="tw-px-1 tw-py-1">
                            {nav.children.map((child, index) => {
                              return (
                                <Link to={child.path}>
                                  <Menu.Item
                                    key={index}
                                    className="tw-block"
                                    href={child.path}
                                  >
                                    <button className="">{child.title}</button>
                                  </Menu.Item>
                                </Link>
                              );
                            })}
                          </div>
                        </Menu.Items>
                      </Transition>
                    </div>
                  );
                } else {
                  return (
                    <Menu.Item
                      key={index}
                      href={nav.path}
                      className="tw-text-white tw-text-sm tw-font-inter tw-ml-4.5"
                    >
                      <button>{nav.title}</button>
                    </Menu.Item>
                  );
                }
              })}
            </Menu>

            <div className="tw-flex ">
              <Menu as="div" className="tw-relative tw-flex">
                <div>
                  <span>
                    <Menu.Button
                      className={clsx(
                        "tw-flex tw-ml-0 tw-justify-center tw-items-center tw-h-full tw-rounded-md tw-text-sm tw-font-inter tw-bg-opacity-20 tw-font-medium tw-text-white hover:tw-bg-opacity-30 focus:tw-outline-none focus-visible:tw-outline-none"
                      )}
                    >
                      <img
                        src={lang.prefixIcon}
                        alt="Globe Icon"
                        className="tw-w-4 tw-h-4 tw-mr-0.5"
                      />
                      {lang.title}
                      <img
                        src={DropdownIcon}
                        alt="Dropdown Icon"
                        className="tw-w-4 tw-h-4 tw-ml-0.5 tw-mt-0.5"
                      />
                    </Menu.Button>
                  </span>
                  <Transition
                    enter="tw-transition tw-ease-out tw-duration-100"
                    enterFrom="tw-transform tw-opacity-0 tw-scale-95"
                    enterTo="tw-transform tw-opacity-100 tw-scale-100"
                    leave="tw-transition tw-ease-in tw-duration-75"
                    leaveFrom="tw-transform tw-opacity-100 tw-scale-100"
                    leaveTo="tw-transform tw-opacity-0 tw-scale-95"
                  >
                    <Menu.Items
                      static
                      className="tw-absolute tw-right-0 tw-mt-1 tw-text-sm tw-w-max tw-origin-top-right tw-divide-y tw-divide-gray-100 tw-rounded-md tw-bg-white tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none"
                      role="menu1"
                      aria-orientation="vertical"
                      aria-labelledby={lang.title}
                    >
                      <div className="tw-px-1 tw-py-1">
                        {lang.children.map((child, index) => {
                          return (
                            <Menu.Item key={index} className="tw-block">
                              <button className="">{child.title}</button>
                            </Menu.Item>
                          );
                        })}
                      </div>
                    </Menu.Items>
                  </Transition>
                </div>
              </Menu>
              <Menu as="div" className="tw-relative tw-flex">
                {buttons.map((button, index) => {
                  if (button.isDropDown) {
                    return (
                      <div key={index}>
                        <span>
                          <Menu.Button
                            key={index}
                            className={clsx(
                              "tw-flex tw-justify-center tw-items-center tw-h-full tw-rounded-md tw-text-sm tw-font-inter tw-bg-opacity-20 tw-font-medium tw-text-white hover:tw-bg-opacity-30 focus:tw-outline-none focus-visible:tw-outline-none",
                              { "tw-ml-0": index === 0, "tw-mx-5": index !== 0 }
                            )}
                            id={button.title}
                          >
                            {button.hasPrefix && (
                              <img
                                src={button.prefixIcon}
                                alt="Globe Icon"
                                className="tw-w-4 tw-h-4 tw-mr-0.5"
                              />
                            )}
                            {button.title}
                            <img
                              src={DropdownIcon}
                              alt="Dropdown Icon"
                              className="tw-w-4 tw-h-4 tw-ml-0.5 tw-mt-0.5"
                            />
                          </Menu.Button>
                        </span>
                        <Transition
                          enter="tw-transition tw-ease-out tw-duration-100"
                          enterFrom="tw-transform tw-opacity-0 tw-scale-95"
                          enterTo="tw-transform tw-opacity-100 tw-scale-100"
                          leave="tw-transition tw-ease-in tw-duration-75"
                          leaveFrom="tw-transform tw-opacity-100 tw-scale-100"
                          leaveTo="tw-transform tw-opacity-0 tw-scale-95"
                        >
                          <Menu.Items
                            static
                            className="tw-absolute tw-right-0 tw-mt-1 tw-text-sm tw-w-max tw-origin-top-right tw-divide-y tw-divide-gray-100 tw-rounded-md tw-bg-white tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby={button.title}
                          >
                            <div className="tw-px-1 tw-py-1">
                              {button.children.map((child, index) => {
                                return (
                                  <Menu.Item key={index} className="tw-block">
                                    <button className="">{child.title}</button>
                                  </Menu.Item>
                                );
                              })}
                            </div>
                          </Menu.Items>
                        </Transition>
                      </div>
                    );
                  } else {
                    return (
                      <Menu.Button
                        key={index}
                        className={clsx(
                          "tw-text-white tw-text-sm tw-font-inter",
                          {
                            "mx-0 tw-px-5 tw-border-[1.5px] tw-rounded-md":
                              button.isOutline,
                            "tw-ml-2.5 tw-mr-0 tw-px-5 tw-rounded-md tw-bg-gradient-to-br tw-from-dark-blue tw-to-light-blue ":
                              !button.isOutline,
                          }
                        )}
                      >
                        {button.title}
                      </Menu.Button>
                    );
                  }
                })}
              </Menu>
            </div>
          </div>
        ) : (
          <div className="tw-bg-transparent tw-h-full tw-w-full tw-flex tw-justify-end">
            <img src={Hamburger} alt="Hamburger" className="" />
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBarNew;