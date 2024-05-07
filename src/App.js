import Navbar from "./pages/Navbar";
import HomeSection from "./pages/HomeSection";
import ShopSection from "./pages/ShopSection";
import AboutSection from "./pages/AboutSection";
import ContactSection from "./pages/ContactSection";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <HomeSection/>
        <ShopSection/>
        <AboutSection/>
        <ContactSection/>
        <Footer/>
    </div>
  );
}

export default App;