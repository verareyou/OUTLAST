import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomeScreen from "./pages/HomeScreen"
import About from "./pages/About"
import LoginRegister from "./pages/LoginRegister"
import NavBar from "./components/Navbar/NavBar"
import TripCreate from "./pages/TripCreate"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useSelector } from "react-redux"
import Loader from "./constants/Loader"

const App = () => {
  const { siteLoader, firebaseLoader } = useSelector((state) => state.loader)
  const { profile } = useSelector((state) => state?.userData)

  return (
    <>
      <ToastContainer
        hideProgressBar
        theme="colored"
        newestOnTop
        draggable={false}
        toastStyle={{ color: "#333333" }}
      />
      {siteLoader || firebaseLoader ? (
        <Loader />
      ) : (
        <Router>
          <NavBar profile={profile} />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/login" element={<LoginRegister />} />
            <Route path="/signup" element={<LoginRegister />} />
            <Route path="/create-trip" element={<TripCreate />} />
            <Route path="/trip/:id" element={<TripCreate />} />
            <Route path="/about-us" element={<About />} />
          </Routes>
        </Router>
      )}
    </>
  )
}

export default App
