// global css markup
import './Styles/App.css'

// react
import { lazy, Suspense } from "react"

// react router dom
import { Route, Routes } from 'react-router-dom'

// components
const AuthScreen = lazy(() => import('./Components/Auth/AuthScreen/AuthScreen'))
const PhoneLogin = lazy(() => import('./Components/Auth/Login/PhoneLogin/PhoneLogin'))
const LoginForm = lazy(() => import('./Components/Auth/Login/LoginForm/LoginForm'))
const ForgetPassword = lazy(() => import('./Components/Auth/Login/ForgetPassword/ForgetPassword'))

const SignUpScreen = lazy(() => import('./Components/Auth/SignUpScreen/SignUpScreen'))

// Fallback Component
import Spinner from './/Components/Common/BrandSpinner/BrandSpinner'
import NotFound from "./Components/NotFound/NotFound"

function App() {
  return (
    <Routes>
      <Route path="/" element={<a href="login">Login page</a>} />
      <Route path="login" element={<Suspense fallback={<Spinner />}><AuthScreen /></Suspense>}>
        <Route index element={<LoginForm />} />
        <Route path="phonelogin" element={<Suspense fallback={<Spinner />}><PhoneLogin /></Suspense>} />
        <Route path="forgot" element={<Suspense fallback={<Spinner />}><ForgetPassword /></Suspense>} />
      </Route>
      <Route path="signup" element={<Suspense fallback={<Spinner />}><SignUpScreen /></Suspense>} />
      <Route path="*" element={<NotFound errorCode={404} />} />
    </Routes>

  )
}

export default App
