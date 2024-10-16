import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import HomeRouter from "./components/HomeRouter";
import EventDetails from "./components/EventDetails";
import Favorites from "./components/Favorites";
import EventList from "./components/EventList";
import LandingPage from "./components/LandingPage";
import LocationForm from "./components/LocationForm";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/search" element={<LocationForm />} />
          <Route path="/events" element={<HomeRouter />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/favorites" element={<Favorites />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
