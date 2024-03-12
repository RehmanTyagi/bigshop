// components
import { Link } from "react-router-dom"
import Button from "../../../UI/Button/Button"
import Input from "../../../UI/Input/Input"

const PhoneLogin = () => {
    return (
        <div className="grid gap-5">
            <div className="w-30 h-30 mb-5"><img className="h-full w-full" src="/logo/logoColor.svg" /></div>
            <div className="flex items-center gap-5 relative group">
                <Button className="bg-[color:var(--primaryColor)] w-fit text-white b-5">IN +91</Button>
                <Input maxLength={10} onInput={({ target }) => target.value.length > target.maxLength ? target.value = target.value.slice(0, target.maxLength) : ""} className="w-auto" type="number" placeholder="Active phone number" />
                <span className="text-sm absolute bg-black p-2 rounded text-white font-medium -bottom-full hidden group-hover:block z-10">Currently Operate in India Only!</span>
            </div>
            <Button className="bg-[color:var(--primaryColor)] text-white b-5">Login</Button>
            <div className="flex gap-2"><p>Login with Email?</p><Link className="text-[color:var(--primaryColor)] font-semibold" to="/login">Login</Link></div>
            <p className="text-xs">To ensure your number is valid, we will send you a text message containing a temporary code. Message and data rates may incur charges.</p>
        </div>
    )
}

export default PhoneLogin
