import results from "../mock/results.json";
import nonResults from "../mock/nonResults.json";

export default function useMovies() {
    const movies = results.Search
    const nonResultResponse = nonResults.Error

    const moviesMapped = movies?.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
    }))
    return { movies: moviesMapped, nonResultResponse }
}