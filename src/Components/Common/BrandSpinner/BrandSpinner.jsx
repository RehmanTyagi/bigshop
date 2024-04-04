import { brandInfo } from "../../../brandInfo"

const BrandSpinner = ({ className }) => {
    return (
        <div className={`${'w-40 animate-pulse absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'} ${className}`}>
            <img src={brandInfo.brandLogo} />
        </div>
    )
}

export default BrandSpinner
