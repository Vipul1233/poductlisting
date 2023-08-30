// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import footer from './components/footer';
import Footer from './components/Footer';
import Product from './components/Product';
import Addproduct from './components/Addproduct';
import Updateproduct from './components/Updateproduct';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Product/> }/>
          <Route exact path="/addproduct" element={<Addproduct/> } />
          <Route exact path="/updateproduct/:id" element={<Updateproduct/> } />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
