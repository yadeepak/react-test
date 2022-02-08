import { Route, Routes } from "react-router-dom";
import { StoreProvider, createStore } from "easy-peasy";
import "./App.css";
import model from "./model";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsCondition from "./components/TermsCondition";

const store = createStore(model);

function App() {
  return (
    <StoreProvider store={store}>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/policy" element={<PrivacyPolicy />} />
          <Route exact path="/terms" element={<TermsCondition />} />
        </Routes>
        <Footer />
      </div>
    </StoreProvider>
  );
}

export default App;
