import { useState, useEffect, useRef } from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiPlusSm } from "react-icons/hi";
import { PiMinusBold } from "react-icons/pi";

const DropDown = ({ title, children, className, titleClassName, isDropDownNew, titleParent }) => {
    // State to manage the dropdown visibility
    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useRef(null)
    // Function to close dropdown when clicked outside
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    // Attach click event listener when component mounts
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            // Detach event listener when component unmounts
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef} className={className}>
            <div className={`${titleParent} flex max-lg:p-3 py-5 px-3 ${isOpen ? 'max-lg:bg-primaryColor max-lg:text-white' : ''} gap-1 items-center justify-between cursor-pointer`} onClick={() => setIsOpen(!isOpen)}>
                <div className="relative">
                    <h2 className={`${titleClassName} max-lg:capitalize font-bold lg:text-sm max-lg:font-medium uppercase`}>{title}</h2>
                    {
                        isDropDownNew && <div className="absolute text-secondaryColor -top-2.5 -right-5 text-xs font-bold uppercase ">Sales</div>
                    }
                </div>
                {
                    !isOpen ? <HiPlusSm className={`${isOpen ? 'text-white' : ''} lg:hidden`} /> : <PiMinusBold className="lg:hidden" />
                }
                <MdOutlineKeyboardArrowDown className="max-lg:hidden" />
            </div>
            {/* Dropdown content */}
            {isOpen && children}
        </div >
    );
};

export default DropDown;
