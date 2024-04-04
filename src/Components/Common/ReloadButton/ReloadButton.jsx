import { useState } from "react";
import { IoMdRefresh } from "react-icons/io";

const ReloadButton = ({callback})=> {
    const [isSpinning, setIsSpinning] = useState(false);

    const handleClick = () => {
      setIsSpinning(true);
      // Perform your reload logic here
      callback()
      setTimeout(() => {
        setIsSpinning(false);
      }, 1000); // Assuming the animation duration is 1 second
    };
    return (
        <span onClick={handleClick} className="bg-[color:var(--primaryColor)] cursor-pointer p-2 mx-2 rounded"><IoMdRefresh className={`fill-white ${isSpinning && 'animate-spin'}`} size={20}/></span>
    )
}

export default ReloadButton
