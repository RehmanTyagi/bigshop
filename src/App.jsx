// global css markup
import './App.css'

// react router dom
import { Route, Routes } from 'react-router-dom'

// components
import Login from "./Components/Login/Login"
import NotFound from "./Components/NotFound/NotFound"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="signup" element={<h1>Register here</h1>} />
      <Route path="*" element={<NotFound errorCode={404} />} />
    </Routes>

  )
}

export default App
