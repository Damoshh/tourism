import Navbar from './component/Navbar.jsx'
import Footer from './component/Footer.jsx'
import Home from "./pages/Home.jsx"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
    return(
        <div className='App'>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' element = {<Home />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}   

export default App
