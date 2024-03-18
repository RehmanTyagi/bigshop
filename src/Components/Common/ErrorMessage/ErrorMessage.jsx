import { MdOutlineErrorOutline } from "react-icons/md"

const ErrorMessage = ({ error, className }) => {

    return (
        <div className={`flex items-center gap-1 p-1 bg-red-50 mt-1 ${className}`}><MdOutlineErrorOutline className="fill-red-500" size={20} /><p className="max-sm:text-[11px] text-xs font-semibold">{error}</p></div>
    )
}

export default ErrorMessage
