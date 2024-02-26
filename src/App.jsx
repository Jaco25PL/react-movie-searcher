// import { useRef } from 'react'
import './App.css'
import { MoviesContainer } from './components/MoviesContainer'
import { useState, useEffect } from 'react'

// import resoultsMovies from "./mocks/with-results.json"
// import resoultsMoviesFail from "./mocks/no-results.json"


function App() {

  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState()
  // setMovies(resoultsMovies.Search)

  // let input = "initial"

  useEffect(() => {

    const URL = `http://www.omdbapi.com/?apikey=4287ad07&s=${searchValue}`

    fetch(URL)
      .then(response => {
        if(!response.ok){
          throw new Error("Could not fetch data")
        }
        return response.json()
      })
      .then(fetchedData => {
        setMovies(fetchedData.Search)
      })

      
    },[searchValue])

  // const movies = resoultsMovies.Search
  // const hasMovies = movies?.length > 0

  // const inputRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    const fields = Object.fromEntries(new window.FormData(event.target))
    // const searchValue = fields.query
    setSearchValue(fields.query)
  }


  return (
    <div className='container'>
      <header>
        <h1>Movie Searcher</h1>
        <form onSubmit={handleSubmit} className='form'>
          <input name='query' type='search' placeholder='Search your movie'></input>
          <button type='submit'>Search</button>
        </form>
      </header>

      <main>

        <MoviesContainer movies={movies}/>

      </main>
    </div>
  )
}

export default App
