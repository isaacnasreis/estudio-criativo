import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CharacterBuilderPage from "./pages/CharacterBuilderPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="personagens" element={<CharacterBuilderPage />} />
        <Route path="ideias" element={<DashboardPage />} />
      </Route>
    </Routes>
  );
}

export default App;
