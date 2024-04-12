import { useState } from "react"
import { fetching } from "../services/movies"
import { useRef } from "react"

export function useMovies ( ) {
// export function useMovies ( {search}  ) {
    const [ movies, setMovies ] = useState([]) // what the fetch give us
    const [ loading, setLoading ] = useState(false)
    const sameMovie = useRef(null)


    // useEffect(() => {
  
      const getMovies = async ({search}) => {
        
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
      }
  
      // getMovies()
  
    // }, [search])
  
    return { movies, loading, getMovies }
  }
  