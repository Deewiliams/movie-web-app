import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation';
import PopularMovies from './Pages/PopularMovies';
import UpcomingMovies from './Pages/UpcomingMovies';
import LatestMovies from './Pages/LatestMovies';
import TopRatedMovies from './Pages/TopRatedMovies';
import PopularMoviesDetails from './Pages/PopularMoviesDetails';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
     <Routes>
    
     <Route path="/" element={<PopularMovies />} />
     <Route path="/upcoming_movies" element={<UpcomingMovies />} />
     <Route path="/latest_movies" element={<LatestMovies />} />
     <Route path="/top_rated_movies" element={<TopRatedMovies />} />
     
     </Routes>
     <Routes>
     <Route path="/detail/:movieId" element={<PopularMoviesDetails />} />
     </Routes>
    </div>
  );
}

export default App;
