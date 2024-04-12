import { useState, useRef, useMemo, useCallback } from "react"
import { fetching } from "../services/movies"

export function useMovies ( {sort} ) {
// export function useMovies ( {search}  ) {
    const [ movies, setMovies ] = useState([]) // what the fetch give us
    const [ loading, setLoading ] = useState(false)
    const sameMovie = useRef(null)


    // useEffect(() => {
  
      const getMovies = useCallback( 
        
        async ({search}) => {
        
        if(sameMovie.current === search) return
        
        try {
          setLoading(true)
          sameMovie.current = search
          const newMovies = await fetching({search}) 
          setMovies(newMovies)
  
        } catch (e) {
          throw new Error(`Something went wrong. Error: ${e}`)
        } finally {
          setLoading(false)
        }
      
      }, [])

      const sortedMovies = useMemo(() => {
        return sort
          ? [...movies].sort((a, b) => a.year.substring(0, 4) - b.year.substring(0, 4))
          // ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
          : movies
      }, [sort, movies])
      
      // getMovies()
  
    // }, [search])
  
    return { movies: sortedMovies , loading, getMovies }
  }
  