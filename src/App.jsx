import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Index } from "./pages/Index";
import { Header } from "./components/Header";
import { Pages2 } from "./pages/Pages2";
import { CarritoCompras } from "./pages/CarritoCompras";
import { Books } from "./pages/Books";
import { PagesEjercicio } from "./pages/PagesEjercicio";
import { Pages4 } from "./pages/Pages4";
import { Pages5 } from "./pages/Pages5";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="*" element={<CarritoCompras />} />
          <Route path="/index" element={<Index />}></Route>
          <Route path="/pages" element={<Pages2 />}></Route>
          <Route path="/pages2" element={<Books />}></Route>
          <Route path="/pages3" element={<PagesEjercicio />}></Route>
          <Route path="/pages4" element={<Pages4 />}></Route>
          <Route path="/pages5" element={<Pages5 />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
