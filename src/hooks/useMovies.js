import { useState, useEffect } from "react"
import { fetching } from "../services/movies"

export function useMovies ({ search  }) {
    const [ movies, setMovies ] = useState([]) // what the fetch give us
    const [ loading, setLoading ] = useState(true)
  
    useEffect(() => {
  
      const getMovies = async () => {
        try {
          setLoading(true)
          const newMovies = await fetching({search}) 
          setMovies(newMovies)
  
        } catch (e) {
          throw new Error(`Something went wrong. Error: ${e}`)
        } finally {
          setLoading(false)
        }
      }
  
      getMovies()
  
    }, [search])
  
    return { movies, loading }
  }
  