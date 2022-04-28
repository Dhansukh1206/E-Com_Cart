import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import CartsDetails from "./Components/CartsDetails";
import Carts from "./Components/Carts"
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Carts />} />
      <Route path="/cart/:id" element={<CartsDetails />} />
    </Routes>
    </>
  )
}

export default App;
