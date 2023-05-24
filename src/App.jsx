import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Index } from "./pages/Index";
import { Header } from "./components/Header";
import { Pages2 } from "./pages/Pages2";
import { CarritoCompras } from "./pages/CarritoCompras";
import { Books } from "./pages/Books";
import { PagesEjercicio } from "./pages/PagesEjercicio";
import { Pages4 } from "./pages/Pages4";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/pages" element={<Pages2 />}></Route>
          <Route path="/pages1" element={<CarritoCompras />}></Route>
          <Route path="/pages2" element={<Books />}></Route>
          <Route path="/pages3" element={<PagesEjercicio />}></Route>
          <Route path="/pages4" element={<Pages4/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
