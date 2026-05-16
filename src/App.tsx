import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import StickyEmergencyBtn from "./components/layout/StickyEmergencyBtn";

import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Emergency from "./pages/Emergency";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Areas from "./pages/Areas";
import AreaDetail from "./pages/AreaDetail";
import ScrollToTop from "./components/layout/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-gray-50 font-sans text-gray-900">
        <Navbar />
        <main className="flex-grow pt-20">
          {" "}
          {/* pt-20 to account for fixed navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/areas/:slug" element={<AreaDetail />} />
            {/* Catch-all route to redirect back to home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <StickyEmergencyBtn />
      </div>
    </Router>
  );
}

export default App;
