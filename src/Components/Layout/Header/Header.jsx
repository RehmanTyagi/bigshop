import TopBar from "./TopBar/TopBar"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { SlHeart, SlHandbag } from "react-icons/sl";
import { CiMenuBurger } from 'react-icons/ci'
import { TfiUser } from "react-icons/tfi";
import { brandInfo } from '../../../brandInfo'
import CategoryNavBtn from "../../Common/CategoryNavBtn/CategoryNavBtn";
import Overlay from "../../Common/Overlay/Overlay";
import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../../Common/DropDown/DropDown";
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleHamburgerMenu = () => {
        setIsOpen(!isOpen)
    }

    const navbar = [
        {
            new: true,
            title: 'TopWear',
            categories: ['Jogger Sweatpants', 'Parachute Joggers', 'Skinny Joggers', 'Fleece Joggers', 'Denim Joggers', 'Cargo Joggers', 'Chino Joggers'],
        },
        {
            title: 'BottomWear',
            categories: ['Sports Running', 'Boots', 'Sneakers', 'Oxfords', 'Derby Shoes', 'Loafers',],
        },
        {
            new: true,
            title: 'Sneakers & Shoes',
            categories: ['Crew Neck', 'V-Neck', 'Henley', 'Polo Shirt', 'Oversized T-shirts', 'Oversized Long Sleeve', 'Graphic/Printed', 'Muscle Fit/Slim Fit'],
        },
        {

            title: 'Accessories',
            categories: ['GYM Bottles', 'Sunglasses', 'Mugs', 'Belts', 'Socks', 'Caps', 'bracelets', 'Bags'],
        }
    ]

    return (
        <div>
            <TopBar />
            {/* Header */}
            <div className="flex border-2 items-center justify-between max-lg:px-2 lg:px-10">
                <CiMenuBurger onClick={handleHamburgerMenu} className="lg:hidden mr-10" size={22} />
                <h1>{brandInfo.brandName}</h1>

                {/* overlay */}
                <Overlay className="lg:hidden z-0" isOpen={isOpen} onClose={handleHamburgerMenu} />

                <div className={`${isOpen && '!translate-x-0'} max-lg:-translate-x-full transition-all ease-in-out duration-300 max-lg:fixed max-lg:w-5/6 inset-0`}>
                    <div className="flex relative inset-0 max-lg:flex-col max-lg:overflow-y-scroll max-lg:bg-gray-100 h-full">
                        <div className="flex items-center p-5 lg:hidden">
                            <h1>{brandInfo.brandName}</h1>
                            <div className=" ml-5 p-0.5 px-3 rounded text-primaryColor border-2 border-primaryColor">Login/Register</div>
                        </div>

                        <div className="bg-white max-lg:overflow-y-scroll flex max-lg:flex-col">
                            {/*mobile category navigation menu */}
                            <div className="flex items-center gap-5 p-5 lg:hidden">
                                <CategoryNavBtn className="rounded-lg overflow-hidden" unit={[{ text: 'men', to: 'men' }, { text: 'women', to: 'women' }]} />
                            </div>
                            {
                                /* navbar links */
                                navbar.map((nav, index) => {
                                    return (
                                        <div key={index} className="relative group max-md:text-sm hover:bg-gray-50">
                                            <Dropdown titleClassName="py-5 px-3 text-sm" title={nav.title} isDropDownNew={nav.new}>
                                                <div className="lg:absolute w-52 shadow max-lg:w-full">
                                                    {
                                                        nav.categories.map((category, index) => {
                                                            return (
                                                                <h3 className="p-2 font-medium max-lg:py-2 cursor-pointer pl-10 bg-white hover:bg-gray-100" key={index}>{category}</h3>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </Dropdown>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        {/* Our Mission*/}
                        <Dropdown className="hidden">
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                        </Dropdown>
                        {/* Other Links*/}
                        <Dropdown className="hidden">
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                        </Dropdown>
                    </div>
                </div>

                {/* user actions */}
                <div className="flex items-center">
                    <Link className="p-5 hover:bg-gray-100 max-lg:hidden">
                        <TfiUser className="cursor-pointer" size={25} />
                    </Link>
                    <Link className="p-5 max-lg:p-2 hover:bg-gray-100">
                        <SlHeart className="cursor-pointer max-lg:h-7" size={25} />
                    </Link>
                    <Link className="p-5 max-lg:p-2 hover:bg-gray-100">
                        <SlHandbag className="cursor-pointer max-lg:h-7" size={25} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
