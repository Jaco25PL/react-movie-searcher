import './App.css'
import { MoviesContainer } from './components/MoviesContainer'

import resoultsMovies from "./mocks/with-results.json"
// import resoultsMoviesFail from "./mocks/no-results.json"

function App() {
  
  const movies = resoultsMovies.Search
  // const hasMovies = movies?.length > 0

  return (
    <div className='container'>
      <header>
        <h1>Movie Searcher</h1>
        <form className='form'>
          <input type='search' placeholder='Search your movie'></input>
          <button type='submite'>Search</button>
        </form>
      </header>

      <main>

        <MoviesContainer movies={movies}/>

      </main>
    </div>
  )
}

export default App
