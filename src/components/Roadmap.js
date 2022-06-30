import React, { useState, useEffect } from "react";
import clsx from "clsx";
import arrowLeft from "../assets/general/arrow_left.svg";
import arrowRight from "../assets/general/arrow_right.svg";
import BetaIcon from "../assets/home/beta-icon.svg";
import CommunityIcon from "../assets/home/community-icon.svg";
import GlobeIcon from "../assets/home/globe-icon.svg";
import LogoWhite from "../assets/general/HarborLogoWhite.svg";


function Roadmap(props) {

    const roadmaps = [
      {
        year: "2022",
        quarter: "Q3",
        image: CommunityIcon,
        title: "Community Launch",
        desc: [
          "Telegram & Discord Launched",
          "Whitepaper release",
          "Genesis NFT whitelisting",
        ],
      },
      {
        year: "2022",
        quarter: "Q4",
        image: LogoWhite,
        title: "Project Launch",
        desc: [
          "What The Hen! Web2.5 release",
          "Harbor web-platform launch",
          "Genesis NFT launch",
        ],
      },
      {
        year: "2023",
        quarter: "Q1",
        image: BetaIcon,
        title: "Other Games Beta",
        desc: [
          "Leena’s Place & Loyalty beta",
          "NFT marketplace launch",
          "Harbor token listing",
        ],
      },
      {
        year: "2023",
        quarter: "Q2",
        image: GlobeIcon,
        title: "Leena’s Place Launch",
        desc: [
          "Land & Chibi NFT sale",
          "FTUE and game data balance",
          "UA campaign kickoff",
        ],
      },
      {
        year: "2023",
        quarter: "Q3",
        image: GlobeIcon,
        title: "Loyalty Launch",
        desc: [
          "Land & Mobster NFT sale",
          "FTUE and game data balance",
          "UA campaign kickoff",
        ],
      },
    ];

    function checkCurrent(roadmap) {
        const year = new Date().getFullYear().toString();
        const quarter = "Q" + Math.floor(new Date().getMonth() / 3 + 1);
        // const quarter = 'Q4';

        if (roadmap.year === year && roadmap.quarter === quarter) {
            return true
        }else{
            return false
        }
    }

    return (
      <div className="tw-flex tw-flex-col tw-w-full tw-py-22 tw-bg-gray-100">
        <div className="tw-flex tw-w-full tw-justify-between tw-items-center tw-px-37 tw-mb-15">
          <h2 className="tw-font-inter tw-font-bold tw-text-heading tw-text-black tw-tracking-tightest">
            Roadmap
          </h2>
          <div className="tw-flex navIcons">
            <div className="navButton tw-bg-buttongrey ">
              <img src={arrowLeft} alt="arrow left" className="tw--ml-1" />
            </div>
            <div className="navButton tw-ml-2.5 tw-bg-buttongrey">
              <img src={arrowRight} alt="arrow right" className="tw-ml-1" />
            </div>
          </div>
        </div>
        <div className="tw-px-37 tw-flex tw-justify-between tw-gap-6 tw-w-full">
          {roadmaps.map((roadmap, index) => {
            return (
              <div className={clsx("tw-w-full tw-h-full tw-group")} key={index}>
                <div
                  className={clsx(
                    "tw-h-68 tw-w-full tw-rounded-xl tw-text-left tw-pl-5 tw-pt-8.4 tw-text-white group-hover:tw-bg-bleugry",
                    {
                      "tw-bg-gradient-to-br tw-from-dark-blue tw-to-light-blue":
                        checkCurrent(roadmap) === true,
                      "tw-bg-buttongrey": checkCurrent(roadmap) === false,
                    }
                  )}
                >
                  <p className="tw-text-roadYear tw-font-bold tw-tracking-tightest tw-mb-0">
                    {roadmap.year}
                  </p>
                  <p className="tw-font-bebas tw-text-roadQuarter tw-mb-0">
                    {roadmap.quarter}
                  </p>
                  <img
                    src={roadmap.image}
                    alt="roadmap"
                    className="tw-w-8 tw-h-8 tw-mt-11 tw-mb-2.5"
                  />
                  <p className="tw-text-roadTitle tw-font-semibold tw-mb-1.5">
                    {roadmap.title}
                  </p>
                  {roadmap.desc.map((desc, ind) => {
                    return (
                      <p key={ind} className="tw-text-roadDesc tw-mb-0">
                        {desc}
                      </p>
                    );
                  })}
                </div>

                <div
                  className={clsx(
                    "tw-h-2.5 tw-w-2.5 tw-mt-3 tw-rounded-full tw-mx-auto",
                    {
                      "tw-bg-gradient-to-br tw-from-dark-blue tw-to-light-blue":
                        checkCurrent(roadmap) === true,
                    }
                  )}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default Roadmap;