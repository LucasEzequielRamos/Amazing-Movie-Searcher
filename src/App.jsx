import {  useState } from 'react';
import './App.css'
import Movies from "./components/Movies";
import  useMovies  from './hooks/useMovies';
import debounce from 'just-debounce-it';
import { useSearch } from './hooks/useSearch';


const App = () => {
  const [sort, setSort] = useState(false)
  const {search, error, setSearch} = useSearch()
  const {movies, getMovies, loading} = useMovies({search, sort})
  
const debouncedGetMovies = debounce(search =>{
  console.log("search", search)
  getMovies({search})
}, 500)

const handleSubmit = (e)=>{
  e.preventDefault()
  if(error !== null) return
getMovies({search})
}

const handleSort= ()=>{
  if(movies.length > 0) 
  setSort(!sort)
  else return
}

const handleChange = (e) =>{
  const newValue = e.target.value
setSearch(newValue)
debouncedGetMovies(newValue)
}

  return (
    
    <div className='page'>
    <header>
      <h1>Movie searcher</h1>
      <form className='form' onSubmit={handleSubmit} >
        <input onChange={handleChange} value={search} name='searchInput' type="text" placeholder='Avengers, Fast and furious, Zootopia....'/>
        <input type='checkbox' onChange={handleSort} />
        <button>🔍</button>
      </form>
        {error && <span style={{color:"red"}}>{error}</span>}
    </header>

    <main className="movie-container">
     {loading ? <p>Cargando...</p> : <Movies movies={movies}/>} 
    </main>
    </div>
  )
}

export default App