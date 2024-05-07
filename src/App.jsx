import { useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from "just-debounce-it"
import { useCallback } from 'react'

function App() {

  const [ sort, setSort ] = useState(false)
  const { search, setSearch, error } = useSearch()
  const { movies, loading , getMovies } = useMovies({sort}) 

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounced = useCallback(
    debounce(newSearch => {
      getMovies({ search: newSearch })
    }, 300)
    , []
  )

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!error){
      getMovies({search})
    }
  }
  
  const handleChange = (e) => {
    const newSearch = e.target.value
    setSearch(newSearch)
    !error && debounced(newSearch)
  }

  const handleSort = () => {
    movies && setSort(!sort)
  }
  
  const empty = movies?.length > 0

  return (

    <div className='w-full'>
      <header >
        <h1 className='text-center font-bold text-3xl sm:text-5xl text-gray-50 sm:w-fit sm:mx-auto mt-10'>MOVIE SEARCHER</h1>
      </header>

      <nav className='w-fit my-10 mx-auto flex flex-col items-center'>
        <form onSubmit={handleSubmit} className='flex flex-col-reverse  gap-3 mb-3'>

          <div className='items-center flex gap-2'>
            <label htmlFor="sort" className='font-semibold text-gray-50'>Sort by year</label>
            <input type='checkbox' name='sort' title='sort' onChange={handleSort} />
          </div>

          <div>
            <input onChange={handleChange} type="text" name='query' title='search' placeholder='Search a movie' className={`mr-2 bg-violet-900 text-gray-50 font-semibold p-3 rounded-lg focus:outline-none  focus:bg-violet-700 transition-colors duration-300 ease-in-out `}  />
            <button type='submit'className=' bg-violet-900 text-gray-50 font-semibold p-3 rounded-lg hover:bg-violet-700 transition-colors duration-300 ease-in-out'  
            >Search</button>
          </div>
        </form>

        <span className='text-red-500'>{error}</span>
     
      </nav>

      <main className={`p-10 ${loading || !empty ? 'flex justify-center' : 'block'} `}>
        <div className='justify-items-center gap-10 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]'>

          {!loading
            ? <Movies movies={movies}/>
            : <span className='font-semibold text-gray-50'>Loading...</span>
          }

        </div>
      </main>
    </div>
  )

}

export default App