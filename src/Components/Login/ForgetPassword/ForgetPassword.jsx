import { Link } from "react-router-dom"
import Button from "../../../UI/Button/Button"
import Input from "../../../UI/Input/Input"
import { BeatLoader } from "react-spinners"

const ForgetPassword = () => {
    return (
        <div className="grid gap-3 max-sm:gap-4">
            <img src="/logo/logoColor.svg" className="h-32 size-32 max-sm:w-50 max-sm:h-auto max-sm:m-auto max-sm:mb-5 " />
            <h1 className="text-2xl font-bold">Reset Pass Code!</h1>
            <p className="font-medium">{"Don't"} worry! Easily forget your password and access your account.</p>
            <p className="font-medium text-sm">Enter your email below to reset your password</p>
            <Input type="email" placeholder="Email or mobile phone number" />
            <Button className="flex bg-[color:var(--primaryColor)] justify-center items-center text-white"><BeatLoader color="white" size={15} /></Button>
            <p className="font-semibold text-sm">Has your email address or mobile phone number changed?</p>
            <p className="text-xs mb-2 font-medium">In case you no longer use the email address linked to your BigShop account, <Link className="underline text-sky-400 font-semibold">Customer Care</Link> can help you regain access to your account.</p>
            <div className="flex justify-between"><span className="flex items-center gap-2"><p className="max-sm:hidden">New to BigShop?</p><Link className="text-[color:var(--primaryColor)] font-semibold" to="/signup">Sign Up</Link></span><Link to="/login" className="text-[color:var(--primaryColor)] font-semibold">Back to Login</Link></div>
        </div>
    )
}

export default ForgetPassword
