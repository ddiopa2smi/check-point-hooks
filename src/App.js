import { Route, Routes } from 'react-router-dom';
import './App.css';
import MovieList from './Components/MovieList';
import MovieDetails from './Components/MovieDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<MovieList />} />
        <Route path="/details/:titre" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
