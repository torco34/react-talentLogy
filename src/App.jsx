import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Index } from "./pages/Index";
import { Header } from "./pages/Header";
import { Pages2 } from "./pages/Pages2";
import { CarritoCompras } from "./pages/CarritoCompras";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="home" element={<Index />}></Route>
          <Route path="/pages" element={<Pages2 />}></Route>
          <Route path="/pages1" element={<CarritoCompras />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
