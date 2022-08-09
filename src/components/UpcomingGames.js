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
          "Leena returns home and becomes mayor of her small town with the vision of rebuilding it into a modern, lively abode for her friends and family.",
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
      <div className="tw-flex tw-flex-col tw-w-full tw-py-12 lg:tw-py-16 2xl:tw-py-22 tw-px-8 lg:tw-px-16 2xl:tw-px-30 tw-bg-white">
        <div className="tw-flex tw-w-full tw-justify-between tw-items-center  tw-mb-13">
          <h2 className="tw-font-inter tw-font-bold tw-text-3xl lg:tw-text-heading tw-text-black tw-tracking-tightest">
            Upcoming Games
          </h2>
          <div className="tw-flex navIcons">
            <div className="navButton tw-bg-buttongrey hover:tw-bg-gradient-to-br hover:tw-from-dark-blue hover:tw-to-light-blue">
              <img src={arrowLeft} alt="arrow left" className="tw--ml-1 tw-h-3 lg:tw-h-6" />
            </div>
            <div className="navButton tw-ml-2.5 tw-bg-buttongrey hover:tw-bg-gradient-to-br hover:tw-from-dark-blue hover:tw-to-light-blue">
              <img src={arrowRight} alt="arrow right" className="tw-ml-1 tw-h-3 lg:tw-h-6" />
            </div>
          </div>
        </div>
        <div className="tw-flex tw-full">
          <div className="tw-flex tw-flex-col lg:tw-flex-row">
            {upcomingGames.map((game, index) => {
              return (
                <div
                  key={index}
                  className={clsx("tw-flex tw-w-full tw-flex-col tw-mb-10", {
                    "lg:tw-ml-13": index === 1,
                  })}
                >
                  <img
                    src={game.image}
                    alt={game.name}
                    className={clsx("tw-h-full")}
                  />
                  <div className="tw-text-left tw-ml-4 lg:tw-ml-8 tw-mt-6 lg:tw-mt-11 tw-w-full lg:tw-w-96 ">
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