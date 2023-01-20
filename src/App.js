import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BaseLayout from "./components/layouts/BaseLayout";
import Dashboard from "./pages/Dashboard";
import Blank from "./pages/Blank";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Blank />} />
          <Route path="projects" element={<Blank />} />
          <Route path="tasks" element={<Blank />} />
          <Route path="users" element={<Blank />} />
          <Route path="support" element={<Blank />} />
          <Route path="settings" element={<Blank />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
