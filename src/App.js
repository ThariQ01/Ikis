import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes ,useLocation} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Service";
import Faq from "./pages/Faq";
import TermsAndConditions from "./components/TermsAndConditions";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";

import "./App.css";

function ScrollToSection() {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
    }
  }, [location.hash]);

  return null;
}

function App() {
  return (
    <Router>
      <div>
        <Header />
        <ScrollToSection />
        <Routes>
          <Route
            path="/IKIS"
            element={
              <div>
                <div id="home">
                  <Home />
                </div>
                <div id="about">
                  <About />
                </div>
                <div id="services">
                  <Services />
                </div>
                <div id="faq">
                  <Faq />
                </div>
              </div>
            }
          />

          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
