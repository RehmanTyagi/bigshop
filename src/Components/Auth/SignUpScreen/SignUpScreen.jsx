import SignUpForm from "./SignUpForm/SignUpForm"
import { selectCurrentPage, } from "../../../Store/formSlice"
import { useSelector } from "react-redux"
import CopyRight from "../../Common/CopyRight/CopyRight"
const SignUpScreen = () => {
    const pageCurrentIndex = useSelector(selectCurrentPage)
    return (
        <div className="text-sm h-dvh lg:grid lg:grid-cols-[auto,500px] ">
            <div className="bg-gray-400 max-lg:hidden"><img className="h-full w-full" src="/assets/images/loginPage.jpeg" /></div>
            <div className="grid grid-rows[1fr,auto] items-center gap-5 py-5 lg:overflow-y-scroll customscrollbar h-full">
                <div className="h-full grid place-content-center">
                    <SignUpForm />
                </div>
                <CopyRight />
            </div>

        </div>
    )
}

export default SignUpScreen
