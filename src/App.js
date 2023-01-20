import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BaseLayout from "./components/layouts/BaseLayout";
import Dashboard from "./pages/Dashboard";
import Blank from "./pages/Blank";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BaseLayout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="orders" element={<Blank/>}/>
          <Route path="products" element={<Blank/>}/>
          <Route path="settings" element={<Blank/>}/>
          <Route path="logout" element={<Blank/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
