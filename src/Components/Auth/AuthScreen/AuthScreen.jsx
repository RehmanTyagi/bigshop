// components
import { Outlet } from 'react-router-dom'

const AuthScreen = () => {
    return (
        <div className="text-sm h-dvh lg:grid lg:grid-cols-[auto,500px]">
            <div className="bg-gray-400 max-lg:hidden"><img className="h-full w-full" src="/assets/images/loginPage.jpeg" /></div>
            <div className="grid relative place-items-center h-full py-5 px-10 max-sm:px-5">
                <Outlet />
                <p className="text-sm font-medium text-center max-sm:text-xs">© 2020 - 2024, BigShop an online shopping platform</p>
            </div>

        </div>
    )
}

export default AuthScreen
