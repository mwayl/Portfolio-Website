import './App.css';
import NavBar from './components/nav-bar';
import Main from './components/main';
import { Routes, Route, Link, BrowserRouter, Navigate } from "react-router-dom";
import About from "./components/about";
import Portfolio from './components/portfolio';
import Footer from './components/footer';
import { Helmet } from 'react-helmet';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
<Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</Helmet>
       <NavBar />
       <Main />
       <About />
       <Portfolio />
       <Footer />

       {/* <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
