import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation';
import PopularMovies from './Pages/PopularMovies';
function App() {
  return (
    <div className="App">
     <Navigation />
     <PopularMovies />
    </div>
  );
}

export default App;
