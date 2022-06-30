import React, { useEffect, useState, Fragment } from "react";
import clsx from "clsx";
import { Menu, Transition } from "@headlessui/react";
import LogoBlue from "../assets/general/HarborLogoBlue.svg";
import DropdownIcon from "../assets/general/arrow-down.svg";
import LogoText from "../assets/general/HarborLogoTextWhite.svg";
import Youtube from "../assets/general/youtube.svg";
import Twitter from "../assets/general/twitter.svg";
import Discord from "../assets/general/discord.svg";
import Plane from "../assets/general/plane.svg";

// create react component
function FooterNew(props) {
    const navs = [
      {
        title: "Games",
        path: "#",
        isDropDown: true,
        children: [
          { title: "Loyalty", path: "/loyalty" },
          { title: "Leena's Place", path: "/leena" },
        ],
      },
      { title: "NFT Marketplace", path: "#", isDropDown: false },
      { title: "Governance", path: "#", isDropDown: false },
      { title: "Docs", path: "#", isDropDown: false },
    ];

    const links = [
      { title: "Privacy", path: "#" },
      { title: "Open Gaming License", path: "#" },
      { title: "Cookie Policy", path: "#" },
    ];

    const socials = [
        { title: "Youtube", path: "#", icon: Youtube },
        { title: "Discord", path: "#", icon: Discord },
        { title: "Contact", path: "#", icon: Plane  },
        { title: "Twitter", path: "#", icon: Twitter },
    ]
    
    return (
      <div className="tw-bg-darker tw-w-screen tw-h-100 tw-px-25 tw-pt-15">
        <div className="tw-text-white tw-flex tw-flex-col md:tw-flex-row tw-justify-between">
          <div className="tw-brand tw-flex tw-w-26 tw-justify-between">
            <img src={LogoBlue} alt="Harbor Logo" />
            <img src={LogoText} alt="Harbor Text" className="h-3.5 my-auto" />
          </div>
          <div className="tw-flex tw-h-7.5">
            <Menu as="div" className="tw-relative tw-flex ">
              {navs.map((nav, index) => {
                if (nav.isDropDown) {
                  return (
                    <div key={index}>
                      <Menu.Button className="tw-flex tw-justify-center tw-items-center tw-h-full tw-rounded-md tw-text-xs tw-font-inter tw-bg-opacity-20 tw-font-medium tw-text-white hover:tw-bg-opacity-30 focus:tw-outline-none focus-visible:tw-outline-none">
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
                        <Menu.Items className="tw-absolute tw-left-0 tw-mt-1 tw-text-xs tw-w-max tw-origin-top-right tw-divide-y tw-divide-gray-100 tw-rounded-md tw-bg-white tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none">
                          <div className="tw-px-1 tw-py-1">
                            {nav.children.map((child, ind) => {
                              return (
                                <Menu.Item key={ind} className="tw-block tw-text-black">
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
                    <Menu.Item
                      key={index}
                      href={nav.path}
                      className="tw-text-white tw-text-xs tw-font-inter tw-ml-4.5"
                    >
                      <button>{nav.title}</button>
                    </Menu.Item>
                  );
                }
              })}
            </Menu>
          </div>
        </div>
        <hr className="tw-mt-5 tw-text-white" />
        <div className="tw-text-white tw-mt-14">
          <p className="tw-text-white tw-text-center tw-font-inter tw-font-medium tw-text-xs ">
            ©2015 Charged Monkey All Rights Reserved
          </p>
          <p className="tw-text-white tw-text-opacity-50 tw-text-center tw-font-inter tw-font-medium tw-text-xs tw-my-5">
            All trademarks referenced herein are the properties of their
            respective owners
          </p>
          <div className="tw-flex tw-justify-center tw-text-center">
            <Menu as="div" className="tw-text-center">
              {links.map((link, index) => {
                return (
                  <Menu.Item
                    key={index}
                    href={link.path}
                    className="tw-text-white tw-text-opacity-50 tw-text-xs tw-font-inter tw-ml-4.5"
                  >
                    <button>{link.title}</button>
                  </Menu.Item>
                );
              })}
            </Menu>
          </div>
          <div className="tw-flex tw-justify-center tw-mt-6">
            <div className="tw-flex tw-justify-between tw-w-48">
              {socials.map((social, index) => {
                return (
                  <div
                    key={index}
                    className="tw-bg-white tw-bg-opacity-10 tw-rounded-md tw-h-8.5 tw-w-8.5 tw-text-center tw-flex tw-justify-center tw-items-center tw-cursor-pointer"
                  >
                    <img
                      src={social.icon}
                      alt={social.title}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
}

export default FooterNew;