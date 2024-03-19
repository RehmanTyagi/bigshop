// css
import 'react-phone-input-2/lib/style.css'

// components
import { Link } from "react-router-dom"
import Button from "../../../Common/Button/Button"
import OtpInput, { ResendOTP } from 'otp-input-react'
import PhoneInput from 'react-phone-input-2'
import { useState } from "react"

const PhoneLogin = () => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [FillOtp, setFillOtp] = useState(false)
    const [Otp, setOtp] = useState('')

    if (!FillOtp)
        return (

            <div>
                <div className="grid gap-5" >
                    <div className="w-30 h-30 mb-5" ><img className="h-full w-full" src="/assets/logo/logoColor.svg" /></div>
                    <div className="relative group">
                        <PhoneInput value={phoneNumber} onChange={setPhoneNumber} countryCodeEditable={false} placeholder="Active Mobile Number" country="in" onlyCountries={['in']} />
                        <span className="text-sm absolute bottom-[110%] bg-black p-2 rounded text-white font-medium hidden group-hover:block z-10">Currently Operate in India Only!</span>
                    </div>
                    <p className="text-xs">To ensure your number is valid, we will send you a text message containing a temporary code. Message and data rates may incur charges.</p>
                    <Button className="bg-[color:var(--primaryColor)] text-white b-5" onClick={() => setFillOtp(true)} disabled={phoneNumber.length < 12 ? true : false}>Login</Button>
                    <div className="flex gap-2">
                        <p>Login with Email?</p>
                        <Link className="text-[color:var(--primaryColor)] font-semibold" to="/login">here</Link>
                    </div>
                </div>
            </div>

        )
    if (FillOtp)
        return (
            <div>
                <div className="grid gap-5">
                    <div className="w-30 h-30 mb-5" > <img className="h-full w-full" src="/assets/logo/logoColor.svg" /></div>
                    <h1 className="text-2xl font-bold">Authentication required!</h1>
                    <p className="font-medium">IN +{phoneNumber} <span onClick={() => setFillOtp(false)} className="text-blue-500 cursor-pointer">Change</span></p>
                    <p className="font-medium text-sm">We’ve sent a One Time Password (OTP) to the mobile number above. Please enter it to complete verification</p>
                    <label className="font-extrabold ">Enter OTP</label>
                    <OtpInput className="OTPContainer gap-3 justify-center" autoFocus otpType="number" OTPLength={6} value={Otp} onChange={setOtp} />
                    <ResendOTP onResendClick={() => console.log("Resend clicked")} />
                    <Button className="bg-[color:var(--primaryColor)] text-white b-5 mt-2">Verify Code</Button>
                </div>
            </div>
        )
}

export default PhoneLogin
