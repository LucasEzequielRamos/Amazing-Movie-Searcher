function MoviesResults({movies}) {
return (
    <ul className="list-of-movies">
        {
        movies.map(movie =>(
        <li className="each-movie" key={movie.id}>            
        <h3>{movie.title}</h3>
        <p>{movie.year}</p>
        <img src={movie.poster} alt={movie.title} />
    </li>
    ))}
        </ul>
)
}
function NoMoviesResults() {        
    return (
        <p>no hay pelis</p>
    )
}

export default function Movies({movies, res}){
    const hasMovies = movies?.length > 0
return(
    hasMovies ?
    <MoviesResults movies={movies}/>
    : <NoMoviesResults res={res}/>
)
}
