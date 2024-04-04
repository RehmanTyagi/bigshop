import { Link } from "react-router-dom"

const CategoryNavBtn = ({ className, unit = [] }) => {
    return (
        <div className={`flex items-center ${className}`} >
            {
                unit.map((link, index) => {
                    const lastElement = unit.length - 1 === index

                    return <Link to={link.to} key={index} className={`bg-primaryColor focus:bg-black hover:bg-white/20 text-white px-10 border-l-[1px] ${lastElement ? 'border-r-[1px]' : ""} uppercase font-extrabold border-black p-3`}>{link.text}</Link>
                })
            }
        </div>
    )
}

export default CategoryNavBtn
