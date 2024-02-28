import "./App.css";
import "./responsive.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navigation from "./components/Navigation";
import Product from "./components/Product";
import SubFooter from "./components/SubFooter";

function App() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <Product />
      <Footer />
      <SubFooter />
    </>
  );
}

export default App;
