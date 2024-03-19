// components
import { Outlet } from 'react-router-dom'
import CopyRight from "../../Common/CopyRight/CopyRight"
const AuthScreen = () => {
    return (
        <div className="text-sm h-dvh lg:grid lg:grid-cols-[auto,500px]">
            <div className="bg-gray-400 max-lg:hidden"><img className="h-full w-full" src="/assets/images/loginPage.jpeg" /></div>
            <div className="flex flex-col justify-between gap-5 lg:overflow-y-scroll customscrollbar relative h-full py-5 max-md:px-5">
                <div className=" max-md:px-0 px-10 h-full grid place-content-center">
                    <Outlet />
                </div>
                <CopyRight />
            </div>

        </div>
    )
}

export default AuthScreen
