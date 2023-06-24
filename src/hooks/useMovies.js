import { useCallback, useMemo, useRef, useState } from "react";
import { searchMovies } from "../services/movies.js";

export default function useMovies({ search, sort }) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const prevSearch = useRef(search)

    const getMovies = useCallback(async ({ search }) => {
        if (search === prevSearch.current) return
        try {
            const newMovies = await searchMovies({ search })
            prevSearch.current = search
            setMovies(newMovies)
            setLoading(true)
        } catch (error) {
            throw new Error('Could not find movies')
        } finally {
            setLoading(false)
        }
    }, [])

    const sortedMovies = useMemo(() => {
        return sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies
    }, [sort, movies])

    return { movies: sortedMovies, getMovies, loading }
}