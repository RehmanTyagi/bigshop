import { Link } from "react-router-dom"
import { TiVendorAndroid } from "react-icons/ti";
import CategoryNavLink from "../../../Common/CategoryNavBtn/CategoryNavBtn";
const TopBar = () => {
    return (
        <div className="bg-primaryColor group flex items-center justify-between text-sm max-lg:p-2 max-lg:justify-center font-medium px-10 capitalize gap-2 text-center">
            {/* top bar like free shipping, 50% off, etc */}
            <p className="text-white max-lg:hidden">Download Our App & Get upto 10% Additional off On All Orders</p>
            <CategoryNavLink className="max-lg:hidden" unit={[{ text: 'Men', }, { text: 'Women', to: 'women' }]} />
            {/* user actions like track oreder, download app, etc */}
            <div className="flex gap-5 uppercase items-center">
                <Link className="text-white">Track Order</Link>
                <Link className="text-white max-md:hidden">Contact Us</Link>
                <Link className="rounded text-white items-center p-1.5 gap-1 hidden"><TiVendorAndroid size={15} className="fill-white" /> Download App</Link>
            </div>
        </div>
    )
}

export default TopBar
