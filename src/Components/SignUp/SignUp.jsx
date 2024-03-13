
// components
import { BeatLoader } from 'react-spinners'
import Input from "../../UI/Input/Input"
import Button from "../../UI/Button/Button"
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div className="h-dvh lg:grid lg:grid-cols-[auto,600px]">
            <div className="bg-gray-400 max-lg:hidden"><img className="h-full w-full" src="loginPage.jpeg" /></div>
            <div className="grid place-items-center h-full">
                <div className="grid gap-3 px-20 py-5 max-sm:px-5 max-sm:gap-4">
                    <img src="logo/logoColor.svg" className="h-32 size-32 max-sm:w-50 max-sm:h-auto max-lg:m-auto max-sm:mb-5 " />
                    <h1 className="text-2xl font-bold">Create an account in order to shop!</h1>
                    <p className="font-medium">setup your free account and shop on the 24-hour online platform. Enjoy using BigShop.</p>
                    <Input focus={true} type="text" placeholder="First and last Name" />
                    <Input type="email" placeholder="Email" />
                    <Input type="password" placeholder="Password" />
                    <Button className="flex bg-[color:var(--primaryColor)] justify-center items-center text-white"><BeatLoader color="white" size={15} /></Button>
                    <p className="text-sm mb-2 font-medium">By continuing, you acknowledge that you have accepted the BigShop <Link className="underline text-sky-400 font-semibold">Conditions of Use</Link> and <Link className="underline text-sky-400 font-semibold">Privacy Notice</Link>.</p>
                    <div className="flex gap-2"><p>Already have an account?</p><Link className="text-[color:var(--primaryColor)] font-semibold" to="/login">Login</Link></div>
                </div>
                <p className="text-sm font-medium text-center max-sm:text-xs">© 2020 - 2024, BigShop an online Ecommerce platform</p>
            </div>

        </div>
    )
}

export default SignUp
