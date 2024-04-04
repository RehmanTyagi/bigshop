// global css markup
import './Styles/App.css'

// react
import { lazy, Suspense } from "react"

// react router dom
import { Route, Routes } from 'react-router-dom'

// components lazy loaded
const AuthScreen = lazy(() => import('./Components/Auth/AuthScreen/AuthScreen'))
const Login = lazy(() => import('./Components/Auth/Login/Login'))
// const SignUpForm = lazy(() => import('./Components/Auth/SignUpForm/SignUpForm'))
// const ForgetPassword = lazy(() => import('./Components/Auth/Login/ForgetPassword/ForgetPassword'))

// Fallback Component
import Spinner from './/Components/Common/BrandSpinner/BrandSpinner'
import NotFound from "./Components/NotFound/NotFound"

// Components
import Screen from './Components/Layout/Screen/Screen';
import Header from './Components/Layout/Header/Header';
import Footer from './Components/Layout/Footer/Footer';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Screen />}>
        <Route index element={<Header />} />
        <Route path="auth" element={<Suspense fallback={<Spinner />}><AuthScreen /></Suspense>}>
          <Route index element={<Login />} />
        </Route>
        <Route element={<Footer />} />
      </Route>
      <Route path="*" element={<NotFound errorCode={404} />} />
    </Routes>
  )
}

export default App
