import { useState } from "react"

export function useSearch () {

    const [ search, setSearch ] = useState('deadpool') // what we have from the input


    return {search, setSearch}
}