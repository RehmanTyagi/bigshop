// components
import TopBar from "./TopBar/TopBar"
import CategoryNavBtn from "../../Common/CategoryNavBtn/CategoryNavBtn";
import Overlay from "../../Common/Overlay/Overlay";
import Dropdown from "../../Common/DropDown/DropDown";

// icons
import { FaRegHeart } from "react-icons/fa6";
import { LuShoppingBag } from "react-icons/lu";
import { RiMenu2Fill } from 'react-icons/ri'
import { FaRegUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

//others
// import { brandInfo } from '../../../brandInfo'
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
    const iconSize = 23
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
            <div className="flex border-2 relative items-center justify-between max-lg:shadow-customShadow max-lg:px-3 lg:px-10">
                <RiMenu2Fill onClick={handleHamburgerMenu} className="lg:hidden mr-10" size={iconSize} />
                <Link className="absolutes mix-blend-multiply">
                    <img className="h-20" src="https://m.media-amazon.com/images/S/abs-image-upload-na/3/AmazonStores/A21TJRUUN4KGV/8b698934e838e577879675a48615bd14.w3334.h3334.jpg" />
                </Link>

                {/* overlay */}
                <Overlay className="lg:hidden z-0" isOpen={isOpen} onClose={handleHamburgerMenu} />

                <div className={`${isOpen && '!translate-x-0'} max-lg:-translate-x-full transition-all ease-in-out duration-300 max-lg:fixed max-lg:w-5/6 inset-0`}>
                    <div className="flex max-lg:gap-2 relative inset-0 max-lg:flex-col max-lg:overflow-y-scroll max-lg:bg-gray-100 h-full">
                        <div className="flex items-center p-5 lg:hidden">
                            <Link className="mix-blend-multiply">
                                <img className="h-20" src="https://m.media-amazon.com/images/S/abs-image-upload-na/3/AmazonStores/A21TJRUUN4KGV/8b698934e838e577879675a48615bd14.w3334.h3334.jpg" />
                            </Link>
                            <div className=" ml-5 p-1 px-5 text-sm rounded text-primaryColor border-2 border-primaryColor">Login/Register</div>
                        </div>

                        <div className="bg-white max-lg:border-2 flex max-lg:flex-col">
                            {/*mobile category navigation menu */}
                            <div className="flex items-center gap-5 p-5 lg:hidden">
                                <CategoryNavBtn className="rounded-lg overflow-hidden border-2" unit={[{ text: 'men' }, { text: 'women' }]} />
                            </div>
                            {
                                /* navbar links */
                                navbar.map((nav, index) => {
                                    return (
                                        <div key={index} className="relative group max-md:text-sm lg:hover:bg-gray-50">
                                            <Dropdown title={nav.title} isDropDownNew={nav.new}>
                                                <div className="lg:absolute bg-white w-52 shadow max-lg:w-full">
                                                    {
                                                        nav.categories.map((category, index) => {
                                                            return (
                                                                <h3 className="p-2 px-5 max-lg:py-2 cursor-pointer hover:bg-gray-200" key={index}>{category}</h3>
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

                        {/* Special Links*/}
                        <div className="bg-white grid gap-2 p-3 lg:hidden">
                            <h2 className="font-bold text-sm uppercase">Special Links</h2>
                            <h3 className="text-sm font-semibold text-secondaryColor" >Join Program to Earn Points</h3>
                            <h3 className="text-sm" >FAQ</h3>
                            <h3 className="text-sm" >Community initiatives</h3>
                        </div>
                        {/* Other Links*/}
                        <Dropdown className="lg:hidden" title="More Links" titleParent="bg-white" titleClassName="!font-bold text-sm max-lg:!uppercase">
                            <div className="bg-white border-2 grid gap-2 p-3">
                                <h3 className="text-sm">Careers</h3>
                                <h3 className="text-sm">About Us</h3>
                                <h3 className="text-sm">Terms & Condition T&C</h3>
                                <h3 className="text-sm" >Contact Us</h3>
                            </div>
                        </Dropdown>
                    </div>
                </div>

                {/* user actions */}
                <div className="flex items-center">
                    <Link className="p-5 px-3 hover:bg-gray-100 max-lg:hidden">
                        <FaSearch className="cursor-pointer" size={iconSize} />
                    </Link>
                    <Link className="p-5 px-3 hover:bg-gray-100 max-lg:hidden">
                        <FaRegUser className="cursor-pointer" size={iconSize} />
                    </Link>
                    <Link className="p-5 px-3 max-lg:p-2 hover:bg-gray-100">
                        <FaRegHeart className="cursor-pointer max-lg:h-7" size={iconSize} />
                    </Link>
                    <Link className="p-5 px-3 max-lg:p-2 hover:bg-gray-100">
                        <LuShoppingBag className="cursor-pointer max-lg:h-7" size={iconSize} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
