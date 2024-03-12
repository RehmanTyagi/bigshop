// global css markup
import './App.css'

// react router dom
import { Route, Routes } from 'react-router-dom'

// components
import Login from "./Components/Login/Login"
import SignUp from "./Components/SignUp/SignUp"
import NotFound from "./Components/NotFound/NotFound"
import PhoneLogin from "./Components/Login/PhoneLogin/PhoneLogin"
import LoginForm from './Components/Login/LoginForm/LoginForm'
function App() {
  return (
    <Routes>
      <Route path="/" element={<a href="login">Login page</a>} />
      <Route path="login" element={<Login />}>
        <Route index element={<LoginForm />} />
        <Route path="phonelogin" element={<PhoneLogin />} />
      </Route>
      <Route path="signup" element={<SignUp />} />
      <Route path="*" element={<NotFound errorCode={404} />} />
    </Routes>

  )
}

export default App
