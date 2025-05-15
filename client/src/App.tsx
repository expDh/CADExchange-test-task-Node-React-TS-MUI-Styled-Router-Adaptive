
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from "./components/views/global/Header.tsx";
import Footer from "./components/views/global/Footer.tsx";

import Main from "./components/Pages/Main.tsx";
import Contact from "./components/Pages/Contact.tsx";

function App() {


  return (
    <Router>
        <Header />
        <main>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </main>

        <Footer />
    </Router>
  )
}

export default App
