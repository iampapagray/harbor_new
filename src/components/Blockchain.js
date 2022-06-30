import React, { } from "react";
import clsx from "clsx";
import Char1 from '../assets/home/char1.svg';
import Char2 from '../assets/home/char2.svg';
import Char3 from '../assets/home/char3.svg';
import Char4 from '../assets/home/char4.svg';
import Char5 from '../assets/home/char5.svg';


function Blockchain(props) {

    const characters = [
      { image: Char1, animate: "tw-animate-float-1" },
      { image: Char2, animate: "tw-animate-float-2" },
      { image: Char3, animate: "tw-animate-float-3" },
      { image: Char4, animate: "tw-animate-float-4" },
      { image: Char5, animate: "tw-animate-float-5" },
    ];

    return (
      <div className="tw-flex tw-flex-col tw-w-full tw-bg-gray-100 tw-py-22 tw-px-30">
            <h3 className="tw-font-inter tw-font-bold tw-text-heading tw-mx-40 tw-tracking-tightest">We are creating blockchain games for the masses</h3>
            <div
                className="tw-flex tw-justify-center tw-items-center tw-gap-4 tw-bg-white tw-w-fulll tw-h-61 tw-mt-7.5 tw-rounded-3xl"
            >
                {characters.map((character, index) => {
                    return (
                      <img
                        key={index}
                        src={character.image}
                        alt={index}
                        className={clsx(
                          "tw-h-48 tw-transition-transform ",
                          character.animate
                        )}
                      />
                    );
                })}
            </div>
      </div>
    );
}

export default Blockchain;