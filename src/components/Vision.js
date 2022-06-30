import React, { } from 'react';
import clsx from 'clsx';
import LightHouse from '../assets/home/lighthouse.svg';
import Pirate from '../assets/home/pirate.svg';
import TimelineIcon from '../assets/home/timeline-icon.svg';

function Vision(props) {

    const visions = [
      {
        title: "Fun-first Approach",
        desc: "Our number one focus is creating exciting gameplay experiences for all gamers on Harbor.",
      },
      {
        title: "Merging F2P and P2E",
        desc: "Harbor games merge the best elements from mobile free-to-play with play-to-earn economics.",
      },
      {
        title: "Driving mass adoption",
        desc: "We tap into the pool of billions of mobile gamers to drive adoption for blockchain gaming.",
      },
    ];

    return (
      <div className="vision-section tw-bg-white tw-py-22 tw-px-30 tw-flex ">
        <div className="tw-flex tw-flex-col tw-text-left tw-w-102  tw-py-16">
          <h3 className="tw-m-0 tw-font-inter tw-font-bold tw-text-heading tw-tracking-tightest tw-mb-7.5">
            Arrr’ Vision
          </h3>
          <div className="tw-flex">
            <div className="tw-flex tw-flex-col tw-mx-4 tw-h-60">
              <img
                src={TimelineIcon}
                alt="TimelineIcon"
                className="tw-w-7 tw-mt-1 "
                        />
                        <div className="tw-h-full tw-border tw-w-0 tw-mx-auto"></div>
            </div>
            <div className="">
              {visions.map((vision, index) => {
                return (
                  <div
                    key={index}
                    className={clsx({ "tw-mb-10": index !== 2 })}
                  >
                    <h2 className="tw-text-visionHead tw-font-bold tw-font-inter tw-mb-2">
                      {vision.title}
                    </h2>
                    <p className="tw-mb-0 tw-text-visionDesc tw-text-textgrey tw-font-inter tw-font-normal ">
                      {vision.desc}
                    </p>
                  </div>
                );
              })}
              <button className="tw-font-medium tw-bg-buttongrey tw--ml-8 tw-py-4 tw-mt-7.5 tw-px-6 tw-text-white tw-text-buttonText tw-rounded-md tw-font-inter">
                Explore Harbor
              </button>
            </div>
          </div>
        </div>
        <div className="tw-flex tw-items-end tw-w-38">
          <img
            src={Pirate}
            alt="LightHouse"
            className="tw-w-72 tw-absolute tw-transition-transform tw-animate-float-1"
          />
        </div>
        <div className="tw-flex tw-flex-grow tw-right-0">
          <img src={LightHouse} alt="LightHouse" className="" />
        </div>
      </div>
    );
}

export default Vision;