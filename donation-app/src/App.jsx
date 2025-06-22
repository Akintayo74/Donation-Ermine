import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Donate from "./pages/Donate"
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'

function App() {
  return (
    <> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/auth/login" element={<Login />}/>
        <Route path="/auth/signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App