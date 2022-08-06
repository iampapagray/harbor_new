import React, { } from 'react';
import Filip from '../assets/team/filip.svg';
import Maghnus from '../assets/team/magnus.svg';
import Milada from '../assets/team/milada.svg';
import Michal from '../assets/team/michal.svg';
import Barry from '../assets/team/barry.svg';
import Natalia from '../assets/team/natalia.svg';
import Pavel from '../assets/team/pavel.svg';
import Vladka from '../assets/team/vladka.svg';
import Matej from '../assets/team/matej.svg';

function CoreTeam(props) {

    const teamMembers = [
      { name: "Filip Fischer", image: Filip, role: "Co-Founder, Growth" },
      { name: "Maghnus Mareneck", image: Maghnus, role: "Blockchain" },
      { name: "Milada Polakova", image: Milada, role: "Art Design" },
      { name: "Michal Harangozo", image: Michal, role: "Co-Founder, CEO" },
      { name: "Barry Plunkett", image: Barry, role: "Blockchain & Economy" },
      { name: "Natalia Sklencarova", image: Natalia, role: "Art Design" },
      { name: "Vladka Sebova", image: Vladka, role: "Lead Design" },
      { name: "Pavel Dolezal", image: Pavel, role: "Product Strategy" },
      { name: "Matej Lancaric", image: Matej, role: "Marketing Director" },
    ];
    
    return (
      <div className="tw-flex tw-flex-col tw-w-full tw-px-8 lg:tw-px-30 tw-py-12 lg:tw-py-22 tw-bg-gray-100">
        <h3 className="tw-mb-0 tw-font-inter tw-text-4xl lg:tw-text-heading tw-text-black tw-font-bold tw-tracking-tightest">
          Core Team
        </h3>
        <p className="tw-mb-0 tw-font-inter tw-text-buttongrey tw-text-lg lg:tw-px-67 tw-font-normal tw-mt-2.5">
          Harbor blends experience from the best of mobile gaming, Silicon
          Valley, and venture capital
        </p>
        <div className="tw-grid tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-x-4 lg:tw-gap-x-20 tw-gap-y-7.5  lg:tw-px-24 tw-mt-6 lg:tw-mt-10">
          {teamMembers.map((member, i) => {
            return (
              <div key={i} className="tw-flex tw-items-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="tw-h-8 lg:tw-h-15 tw-w-8 lg:tw-w-15"
                />
                <div className="tw-ml-2.5 tw-text-left tw-flex-col ">
                  <h5 className='tw-mb-0 tw-font-bold tw-text-xs lg:tw-text-memberHead '>{member.name}</h5>
                  <p className='tw-mb-0 tw-text-xs'>{member.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default CoreTeam;