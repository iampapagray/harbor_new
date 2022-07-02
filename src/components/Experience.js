import arrowLeft from "../assets/general/arrow_left.svg";
import arrowRight from "../assets/general/arrow_right.svg";

const Experience = () => {
    const pastExps = [
        {image: '', title: "Neemo's Reef", description: ''},
        {image: '', title: "Toy Story: Smash It!", description: ''},
        {image: '', title: "Star Wars: Assault Team", description: ''},
        {image: '', title: "Emporea", description: ''},
        {image: '', title: "Trainstation 2", description: ''},
    ]
    return (
        <div className="tw-flex tw-flex-col tw-w-full tw-px-30 tw-py-22 tw-bg-gray-100">
            <div className="tw-flex tw-w-full tw-justify-between tw-items-center tw-mb-13">
                <h2 className="tw-font-inter tw-font-bold tw-text-heading tw-text-black tw-tracking-tightest">
                Past Experience
                </h2>
                <div className="tw-flex navIcons">
                <div className="navButton tw-bg-buttongrey hover:tw-bg-gradient-to-br hover:tw-from-dark-blue hover:tw-to-light-blue">
                    <img src={arrowLeft} alt="arrow left" className="tw--ml-1" />
                </div>
                <div className="navButton tw-ml-2.5 tw-bg-buttongrey hover:tw-bg-gradient-to-br hover:tw-from-dark-blue hover:tw-to-light-blue">
                    <img src={arrowRight} alt="arrow right" className="tw-ml-1" />
                </div>
                </div>
            </div>
            <div className=" tw-flex tw-w-full">
                
            </div>
        </div>
    );
};

export default Experience;
