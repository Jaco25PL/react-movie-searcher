import { useState ,useRef, useEffect } from "react"

export function useSearch () {

    const [ search, setSearch ] = useState('') // what we have from the input
    const [ error, setError ] = useState(null)
    const firstInput = useRef(true)
  
    useEffect(() => {
  
      if(firstInput.current){
        firstInput.current = search === ''
        setError(true)
        return
      }
      if(search === ''){
        setError("Cant't search nothing")
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