import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Index } from "./pages/Index";
import { Header } from "./pages/Header";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="home" element={<Index />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
