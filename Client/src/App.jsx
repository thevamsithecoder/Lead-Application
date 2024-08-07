import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Edit from './components/Edit';


function App() {
  return (
    <div>
    <Navbar />
    <Routes>
      <Route  exact path="/" element={<Home />}></Route>
      <Route exact path="/register" element={<Register />}> </Route>
      <Route exact path="/edit/:id" element={<Edit />}> </Route>
    </Routes>
  </div>
  )
}

export default App
