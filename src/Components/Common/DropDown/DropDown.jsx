import { useState, useEffect, useRef } from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const DropDown = ({ title, children, className, titleClassName, isDropDownNew }) => {
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
        <div ref={dropdownRef} className={`${className} '}`}>
            <div className={`flex gap-1 items-center justify-between cursor-pointer ${titleClassName}`} onClick={() => setIsOpen(!isOpen)}>
                <div className="relative">
                    <h2 className="font-bold uppercase">{title}</h2>
                    {
                        isDropDownNew && <div className=" absolute text-red-500 -top-2.5 -right-5 text-xs font-bold uppercase ">New</div>
                    }
                </div>
                <MdOutlineKeyboardArrowDown />
            </div>
            {/* Dropdown content */}
            {isOpen && children}
        </div >
    );
};

export default DropDown;
