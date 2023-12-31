import { Header } from "./components/Header";
import GlobalStyles from "./components/styles/Global";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Monitoring } from "./pages/Monitoring/Monitoring";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/monitoring" element={<Monitoring />} />
      </Routes>
    </>
  );
}

export default App;
