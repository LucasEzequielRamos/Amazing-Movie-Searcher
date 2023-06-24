import { useState, useRef, useEffect } from "react"

export function useSearch() {
    const [search, setSearch] = useState('')
    const [error, setError] = useState(null)
    const firstInput = useRef(true)

    useEffect(() => {
        if (firstInput.current) {
            firstInput.current = search === ''
            return
        }
        if (search === '') {
            setError('no se puede buscar si esta vacio')
            return
        }
        setError(null)
    }, [search])

    return { search, error, setSearch }

}