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
import Rentedroom from "./pages/Rentedroom";
import PushTicket from "./pages/PushTicket";
import PullTicket from "./pages/PullTicket";
import Mypage from "./pages/Mypage";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
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
            <Route path="/pushticket" element={<PushTicket />} />
            <Route path="/pullticket" element={<PullTicket />} />
            <Route path="/mypage" element={<Mypage />} />
          </Routes>
        </div>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
