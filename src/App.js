import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation';
import PopularMovies from './Pages/PopularMovies';
import UpcomingMovies from './Pages/UpcomingMovies';
import LatestMovies from './Pages/LatestMovies';
import TopRatedMovies from './Pages/TopRatedMovies';
import PopularMoviesDetails from './Pages/PopularMoviesDetails';
import { Routes, Route } from "react-router-dom";
import TopRatedMoviesDetail from './Pages/TopRatedMoviesDetail';
import UpcomingMoviesDetail from './Pages/UpcomingMoviesDetail';
import NowPlaying from './Pages/NowPlaying';

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
     <Route path="/detail/:movieId" exact element={<PopularMoviesDetails />} />
     <Route path="/rated_movie/:ratedMovieId" exact element={<TopRatedMoviesDetail />} />
     <Route path="/upcoming_movie/:upcomingMovieId" exact element={<UpcomingMoviesDetail />} />
     <Route path="/now_playing" element={<NowPlaying />} />
     </Routes>
    </div>
  );
}

export default App;
