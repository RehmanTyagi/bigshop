import { NavLink } from "react-router-dom"

const CategoryNavBtn = ({ className, unit = [] }) => {
    return (
        <div className={`flex items-center ${className}`} >
            {
                unit.map((link, index) => {
                    const lastElement = unit.length - 1 === index

                    return <NavLink to={link.to} key={index} className={`bg-primaryColor focus:bg-red-700 focus:text-white hover:bg-white/20 text-white px-10 border-l-[1px] ${lastElement ? 'border-r-[1px]' : ""} uppercase font-extrabold border-gray-400 p-3`}>{link.text}</NavLink>
                })
            }
        </div>
    )
}

export default CategoryNavBtn
