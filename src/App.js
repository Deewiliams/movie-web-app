import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation';
import PopularMovies from './Pages/PopularMovies';
import UpcomingMovies from './Pages/UpcomingMovies';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
     <Navigation />
     <Routes>
     <Route path="/" element={<PopularMovies />} />
     <Route path="/upcoming_movies" element={<UpcomingMovies />} />
     
     </Routes>
    </div>
  );
}

export default App;
