import './App.css'
import { useState } from 'react'

// import resultsMovies from './mocks/with-results.json'
import { MoviesContainer } from './components/MoviesContainer'


function App() {

  const [userSearch, setUserSearch] = useState("")
  // const movies = resultsMovies.Search

  // const mapMovies = () => {
  //   movies.map(movie => (
  //     <div key={movie.imdbID}>
  //       <img src={movie.Poster} alt={movie.imdbID} />
  //     </div>
  //   ))
  // }


  const handleSubmit = (e) => {
    e.preventDefault()
    
    const {query} = Object.fromEntries( new window.FormData(e.target) )
    setUserSearch(query)
  }

  console.log(userSearch)
  
  return (
    <div className='w-full'>
      <header className='mt-10'>
        <div>
          <form onSubmit={handleSubmit} className='flex gap-5 bg-slate-900 py-3 px-2 rounded-lg'>
            <input 
              className='bg-slate-900 outline-none text-slate-50 px-2 py-1 text-xl'
              name='query' 
              type="search"
              // ref={inputRef} 
              placeholder='Type a movie'
            />
            <button 
              type='submit'
              className='hover:text-slate-400 transition-all duration-200 active:text-slate-500 active:scale-95 ring-2 ring-slate-700  text-md mr-2 bg-gradient-to-tr from-slate-900 to-slate-800 px-2 rounded-md  text-slate-50 font-bold'
            >Search</button>
          </form>
        </div>
      </header>

      <main className='mx-10'>
        <MoviesContainer/>
      </main>  

    </div>
  )
}

export default App
