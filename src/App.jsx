import './App.css'
import Movies from "./components/Movies";
import  useMovies  from './hooks/useMovies';

const App = () => {
const {movies, nonResultResponse} = useMovies()

  return (
    <div className='page'>
    <header>
      <h1>Movie searcher</h1>
      <form className='form' >
        <input type="text" placeholder='Avengers, Fast and furious, Zootopia....'/>
        <button>🔍</button>
      </form>
    </header>

    <main className="movie-container">
      <Movies movies={movies} res={nonResultResponse}/>
    </main>
    </div>
  )
}

export default App