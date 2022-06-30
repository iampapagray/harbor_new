import clsx from "clsx";
import React, { } from "react";
import leena from '../assets/home/leena.png';
import loyalty from '../assets/home/loyalty.png';
import arrowLeft from '../assets/general/arrow_left.svg';
import arrowRight from '../assets/general/arrow_right.svg';


function UpcomingGames(props) {

    const upcomingGames = [
      {
        name: "Leena's Place",
        image: leena,
        description:
          "Leena returns home and becomes mayor of her small town with the vision of rebuilding it into a modern, lively abode for her friends and family",
        path: "/leena",
      },
      {
        name: "Loyalty",
        image: loyalty,
        description:
          "Kick up your own gang and run your family’s crime activities. Select your Cosa Nostra and lead them against the fierce competition of the Mafia Town.",
        path: "/loyalty",
      },
    ];

    return (
      <div className="tw-flex tw-flex-col tw-w-full tw-px-30 tw-bg-white tw-py-22">
        <div className="tw-flex tw-w-full tw-justify-between tw-items-center  tw-mb-13">
          <h2 className="tw-font-inter tw-font-bold tw-text-heading tw-text-black tw-tracking-tightest">
            Upcoming Games
          </h2>
          <div className="tw-flex navIcons">
            <div className="navButton tw-bg-buttongrey">
              <img src={arrowLeft} alt="arrow left" className="tw--ml-1" />
            </div>
            <div className="navButton tw-ml-2.5 tw-bg-buttongrey">
              <img src={arrowRight} alt="arrow right" className="tw-ml-1" />
            </div>
          </div>
        </div>
        <div className="tw-flex">
          <div className="tw-flex">
            {upcomingGames.map((game, index) => {
              return (
                <div
                  key={index}
                  className={clsx("tw-flex tw-flex-col tw-w-full tw-mb-10", {
                    "tw-ml-13": index === 1,
                  })}
                >
                  <img
                    src={game.image}
                    alt={game.name}
                    className={clsx("tw-h-full")}
                  />
                  <div className="tw-text-left tw-ml-8 tw-mt-11 tw-w-96 ">
                    <h3 className="tw-text-2xl tw-font-inter tw-font-bold">
                      {game.name}
                    </h3>
                    <p className="tw-text-sm tw-font-inter tw-text-textgrey tw-mt-2.5 tw-mb-5">
                      {game.description}
                    </p>
                    <button className="tw-bg-gradient-to-br tw-from-dark-blue tw-to-light-blue tw-font-medium tw-ml-0 tw-py-4 tw-px-6 tw-text-white tw-text-buttonText tw-rounded-md tw-font-inter">
                      Learn more
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
 }

export default UpcomingGames;