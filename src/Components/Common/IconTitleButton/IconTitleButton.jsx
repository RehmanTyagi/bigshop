import { Link } from "react-router-dom"

const IconTitleButton = ({ children, link, className }) => {
    return (
        <Link to={link} className={`${className ? className : ''} flex flex-col justify-center items-center gap-1 px-3`}>
            {children}
        </Link>
    )
}

export default IconTitleButton
