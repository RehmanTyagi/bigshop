//icons
import { FcGoogle } from "react-icons/fc";
import { IoPhonePortraitOutline } from "react-icons/io5";
// components
import Input from "../../UI/Input/Input"
import Button from "../../UI/Button/Button"
import { Link } from 'react-router-dom'
const SignUp = () => {
    return (
        <div className="h-dvh sm:block lg:grid grid-cols-[auto,600px]">
            <div className="bg-green-400 max-sm:hidden"><img className="h-full w-full" src="loginPage.jpeg" /></div>
            <div className="grid place-items-center h-full">
                <div className="grid gap-3 px-20 py-5 max-sm:px-5 max-sm:gap-4">
                    <img src="logo/logoColor.svg" className="h-20 size-40 max-sm:w-60 max-sm:h-auto max-sm:m-auto max-sm:mb-5 " />
                    <h1 className="text-3xl font-bold">Login to Access Orders</h1>
                    <p>Welcome back! Please use your email or another service to sign in.</p>
                    <Input focus={true} type="email" placeholder="Email" />
                    <Input type="password" placeholder="Password" />
                    <Button className="text-white">Login</Button>
                    <div className="flex gap-5 items-center">
                        <hr className="w-full border-gray-200 border-b-2" />
                        <p className="text-gray-300">or</p>
                        <hr className="w-full border-gray-200 border-b-2" />
                    </div>
                    <Button className="grid grid-cols-[10px,1fr] items-center bg-white border-2 "><FcGoogle />Continue with Google</Button>
                    <Button className="grid grid-cols-[10px,1fr] items-center bg-white border-2"><IoPhonePortraitOutline />Continue with Phone</Button>
                    <div className="flex justify-between"><span className="flex items-center gap-2"><p className="max-sm:hidden">New to BigShop?</p><Link className="text-[color:var(--primaryColor)]" to="signup">Sign Up</Link></span><Link to="forgot" className="text-[color:var(--primaryColor)]">Forgot password?</Link></div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
