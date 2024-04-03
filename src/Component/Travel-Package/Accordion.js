import { FaChevronDown } from "react-icons/fa6";
export default function Accordion(props) {
    return (
        <div className="rounded-md lg:w-[56rem]  mb-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] duration-500">
            <button
                className={`w-full p-3.5 text-left  ${props.isOpen ?
                    'bg-[#2976b6]' : 'bg-base-400'} ${props.isOpen ?
                        'text-white' : 'text-orange-500'}  duration-500`}
                onClick={props.toggleAccordion}
            >
                {props.title}
                <span className={`float-right transform ${props.isOpen ?
                    'rotate-180' : 'rotate-0'}  duration-500 ${props.isOpen ?
                        'text-white' : 'text-orange-500'} `}>
                    <FaChevronDown />
                </span>
            </button>
            {props.isOpen && (
                <div className="p-4 bg-[#2976b6] text-white duration-500">
                    {props.data}
                </div>
            )}
        </div>
    );
};
