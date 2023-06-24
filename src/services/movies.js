
const API_KEY = 'cb08784e'

export async function searchMovies({ search }) {
    if (search === '') return null
    try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&type=movie`)
        const json = await res.json()

        const movies = json.Search

        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
        }))

    } catch (error) {
        throw new Error('Error in search: ')
    }
}