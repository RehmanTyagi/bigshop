import { Outlet } from "react-router-dom"
const Screen = () => {
    return (
        <div>
            {/* outlet for nested routes */}
            <Outlet />
        </div>
    )
}

export default Screen
