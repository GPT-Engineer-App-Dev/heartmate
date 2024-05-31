import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ProfileCreation from "./pages/ProfileCreation.jsx";
import MatchRecommendations from "./pages/MatchRecommendations.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/create-profile" element={<ProfileCreation />} />
        <Route path="/match-recommendations" element={<MatchRecommendations />} />
      </Routes>
    </Router>
  );
}

export default App;
