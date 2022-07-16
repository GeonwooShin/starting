import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import OAuth from "./pages/OAuth";
import Footer from "./components/Footer";
import Blinddate from "./pages/Blinddate";
import Dotogether from "./pages/Dotogether";
import Restaurant from "./pages/Restaurant";
import Rentedroom from "./pages/Rendtedroom";

function App() {
  return (
    <div className="App">
      <div className="content_wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/oauth2/code/kakao" element={<OAuth />} />
          <Route path="/blinddate" element={<Blinddate />} />
          <Route path="/dotogether" element={<Dotogether />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/rentedroom" element={<Rentedroom />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
