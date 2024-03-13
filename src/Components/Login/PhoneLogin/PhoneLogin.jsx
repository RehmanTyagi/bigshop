// icons
import { RiArrowDropUpFill, RiArrowDropDownFill } from "react-icons/ri";
// components
import { Link } from "react-router-dom"
import Button from "../../../UI/Button/Button"
import Input from "../../../UI/Input/Input"

const PhoneLogin = () => {
    return (
        <div className="grid gap-5">
            <div className="w-30 h-30 mb-5"><img className="h-full w-full" src="/logo/logoColor.svg" /></div>
            <div className="grid grid-cols-[auto,1fr] gap-3 relative group">
                <Button className="flex items-center bg-[color:var(--primaryColor)] text-white">IN +91 <span><RiArrowDropUpFill size={25} className="absolute top-1.5 fill-white" /><RiArrowDropDownFill size={25} className="relative top-1 fill-white" /></span></Button>
                <Input maxLength={10} onInput={({ target }) => target.value.length > target.maxLength ? target.value = target.value.slice(0, target.maxLength) : ""} className="w-auto" type="number" placeholder="Active phone number" />
                <span className="text-sm absolute bg-black p-2 rounded text-white font-medium -bottom-full hidden group-hover:block z-10">Currently Operate in India Only!</span>
            </div>
            <p className="text-xs">To ensure your number is valid, we will send you a text message containing a temporary code. Message and data rates may incur charges.</p>
            <Button className="bg-[color:var(--primaryColor)] text-white b-5">Login</Button>
            <div className="flex gap-2"><p>Login with Email?</p><Link className="text-[color:var(--primaryColor)] font-semibold" to="/login">here</Link></div>
        </div>
    )
}

export default PhoneLogin
