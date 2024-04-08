// components
import TopBar from "./TopBar/TopBar"
import CategoryNavBtn from "../../Common/CategoryNavBtn/CategoryNavBtn";
import Overlay from "../../Common/Overlay/Overlay";
import Dropdown from "../../Common/DropDown/DropDown";
import Skeleton from 'react-loading-skeleton'
import Logo from '../../Common/Logo/Logo'
import IconTitleButton from '../../Common/IconTitleButton/IconTitleButton'
// icons
import { FaRegHeart } from "react-icons/fa6";
import { LuShoppingBag } from "react-icons/lu";
import { RiMenu2Fill } from 'react-icons/ri'
import { FaRegUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

//others
// import { brandInfo } from '../../../brandInfo'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//hooks
import axios from 'axios'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [navItems, setNavItems] = useState([])

    const handleHamburgerMenu = () => {
        setIsOpen(!isOpen)
    }

    useEffect(function () {
        const fetchNavItems = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/navItems')
                console.log(data)
                setNavItems(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchNavItems()
    }, [])

    return (
        <div>
            <TopBar />
            {/* Header */}
            <div className="flex border-2 relative items-center justify-between max-lg:shadow-customShadow max-lg:px-3 lg:px-10">
                <IconTitleButton className="lg:hidden">
                    <RiMenu2Fill onClick={handleHamburgerMenu} size={25} />
                </IconTitleButton>
                {/* overlay */}
                <Overlay className="lg:hidden z-0" isOpen={isOpen} onClose={handleHamburgerMenu} />
                <Logo />
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
                                navItems.length ?
                                    /* navbar links */
                                    navItems.map((nav, index) => {
                                        return (
                                            <div key={index} className="relative group max-md:text-sm lg:hover:bg-gray-50">
                                                <Dropdown title={nav.title} isDropDownNew={nav.salesOn}>
                                                    <div className="lg:fixed p-2 bg-white !left-0 shadow max-lg:w-full">
                                                        {
                                                            nav.categories.map((category, index) => {
                                                                return (
                                                                    <div key={index}><Link to={category.link} className="p-2 capitalize px-5 max-lg:py-2 flex items-center gap-1 cursor-pointer hover:bg-gray-50" key={index}>{category.type}<p className="text-[10px] font-bold text-secondaryColor">{category.activeOffer}</p></Link></div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Dropdown>
                                            </div>
                                        )
                                    }) : <div className="grid grid-cols-4 m-5 gap-2 max-lg:grid-cols-1"><Skeleton count={1} className="max-lg:!h-full max-lg:!w-full" height={30} width={100} /><Skeleton count={1} className="max-lg:!h-full max-lg:!w-full" height={30} width={100} /><Skeleton count={1} className="max-lg:!h-full max-lg:!w-full" height={30} width={100} /><Skeleton count={1} className="max-lg:!h-full max-lg:!w-full" height={30} width={100} /></div>
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
                <div className="flex max-lg:py-2">
                    <IconTitleButton className="max-lg:hidden">
                        <FaSearch />
                        <p className="text-xs font-bold">Search</p>
                    </IconTitleButton>
                    <IconTitleButton className="max-lg:hidden">
                        <FaRegUser className="cursor-pointer" />
                        <p className="text-xs font-bold">Profile</p>
                    </IconTitleButton>
                    <IconTitleButton>
                        <FaRegHeart className="cursor-pointer" />
                        <p className="text-xs font-bold">Wishlist</p>
                    </IconTitleButton>
                    <IconTitleButton>
                        <LuShoppingBag className="cursor-pointer" />
                        <p className="text-xs font-bold">Bags</p>
                    </IconTitleButton>
                </div>
            </div>
        </div>
    )
}

export default Header
