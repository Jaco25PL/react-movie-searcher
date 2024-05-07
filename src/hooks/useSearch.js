import { useState ,useRef, useEffect } from "react"

export function useSearch () {

    const [ search, setSearch ] = useState('') // what we have from the input
    const [ error, setError ] = useState(null)
    const firstInput = useRef(true)

    useEffect(() => {
      
      if(firstInput.current){
        firstInput.current = search === '' // if search empty we set ref as true, once is not empty we set the ref as false, but as in the if we said that should only enter id the ref is true, never will enter again
        setError(true) // Becuase in the app we render things only if error is false
        return
      }
      if(search === ''){
        setError("Can't search nothing") 
        return
      }
      if(search.length < 3){
        setError('Please more than two letters')
        return
      }
  
      setError(null)
    },[search])
  
    return { search, setSearch, error }
  }