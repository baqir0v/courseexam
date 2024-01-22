import AddPage from "./pages/AddPage"
import DetailPage from "./pages/DetailPage"
import Home from "./pages/Home"
import Wishlist from "./pages/Wishlist"
import "./reset.scss"
import {Route, Routes} from "react-router-dom"

function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/add" element={<AddPage/>}/>
      <Route path="/wishlist" element={<Wishlist/>}/>
      <Route path="/detail/:id" element={<DetailPage/>}/>
     </Routes>
    </>
  )
}

export default App
