import { Route, Routes } from "react-router-dom"
import Auth from "./components/auth/Auth"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

// Pages
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
