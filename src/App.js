import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import OAuth from "./pages/OAuth";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <div className="content_wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/oauth2/code/kakao" element={<OAuth />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
