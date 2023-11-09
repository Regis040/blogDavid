// import logo from './logo.svg';
import './App.scss';
import Home from './Home.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from "./Contact.jsx";


function App() {
  return (
    <BrowserRouter>
        <Routes>    
             <Route path="/" element={<Home />} />
             <Route path="/contact" element={<Contact />} />          
        </Routes>
    </BrowserRouter>
  );
}
export default App;
