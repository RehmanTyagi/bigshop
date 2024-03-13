// global css markup
import './App.css'

// react
import { lazy, Suspense } from "react"

// react router dom
import { Route, Routes } from 'react-router-dom'

// components
const Login = lazy(() => import('./Components/Login/Login'))
const PhoneLogin = lazy(() => import('./Components/Login/PhoneLogin/PhoneLogin'))
const LoginForm = lazy(() => import('./Components/Login/LoginForm/LoginForm'))
const SignUp = lazy(() => import('./Components/SignUp/SignUp'))
const ForgetPassword = lazy(() => import('./Components/Login/ForgetPassword/ForgetPassword'))

// Fallback Component
import Spinner from './UI/BrandSpinner/BrandSpinner'
import NotFound from "./Components/NotFound/NotFound"
function App() {
  return (
    <Routes>
      <Route path="/" element={<a href="login">Login page</a>} />
      <Route path="test" element={<Spinner />} />
      <Route path="login" element={<Suspense fallback={<Spinner />}><Login /></Suspense>}>
        <Route index element={<LoginForm />} />
        <Route path="phonelogin" element={<Suspense fallback={<Spinner />}><PhoneLogin /></Suspense>} />
        <Route path="forgot" element={<Suspense fallback={<Spinner />}><ForgetPassword /></Suspense>} />
      </Route>
      <Route path="signup" element={<Suspense fallback={<Spinner />}><SignUp /></Suspense>} />
      <Route path="*" element={<NotFound errorCode={404} />} />
    </Routes>

  )
}

export default App
