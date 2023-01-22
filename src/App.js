import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BaseLayout from "./components/layouts/BaseLayout";
import Dashboard from "./pages/Dashboard";
import BlankPage from "./pages/BlankPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<BlankPage />} />
          <Route path="projects" element={<BlankPage />} />
          <Route path="tasks" element={<BlankPage />} />
          <Route path="users" element={<BlankPage />} />
          <Route path="support" element={<BlankPage />} />
          <Route path="settings" element={<BlankPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
