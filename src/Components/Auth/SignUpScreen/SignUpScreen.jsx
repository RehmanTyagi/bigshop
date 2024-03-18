import SignUpForm from "./SignUpForm/SignUpForm"
import { selectCurrentPage, } from "../../../Store/formSlice"
import { useSelector } from "react-redux"
const SignUpScreen = () => {
    const pageCurrentIndex = useSelector(selectCurrentPage)
    return (
        <div className="text-sm h-dvh lg:grid lg:grid-cols-[auto,500px] ">
            <div className="bg-gray-400 max-lg:hidden"><img className="h-full w-full" src="/assets/images/loginPage.jpeg" /></div>
            <div className="grid place-items-center lg:overflow-y-scroll customscrollbar h-full">
                <SignUpForm />
                <p className="text-sm font-medium text-center max-sm:text-xs">© 2020 - 2024, BigShop an online shopping platform</p>
            </div>

        </div>
    )
}

export default SignUpScreen
