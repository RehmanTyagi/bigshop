import { brandInfo } from "../../../brandInfo"

const CopyRight = () => {
    const currentYear = new Date().getFullYear()
    return (
        <p className="font-medium bg-black text-white p-1 text-center text-xs">© {currentYear}, {brandInfo.brandName.split()}.com, LLC. or its affiliates</p>
    )
}

export default CopyRight
