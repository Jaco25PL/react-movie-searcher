import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
// import moviesResults from './mocks/withResults.json'

function App() {

  // const movies = moviesResults.Search

  const [ search, setSearch ] = useState('deadpool')
  const [ movies, setMovies ] = useState()
  const [ onSearch, setOnSearch ] = useState()

  useEffect( () => {
    
    const URL = `https://www.omdbapi.com/?apikey=4287ad07&s=${search}`
    // fetch(URL)
    //   .then(res => res.json())
    //   .then(data => setMovies(data.Search))
    
    const tryingToFetch = async () => {
      
      try {
        const response = await fetch(URL)
				if(!response.ok){
					throw new Error(`Failed to fetch data. Status: ${response.status}`)
				}
				const docs = await response.json()

        const mappedMovies = docs.Search?.map(movie => ({
          id: movie.imdbID,
          image: movie.Poster,
          title: movie.Title,
          year: movie.Year,
          type: movie.type
        }))

        setMovies(mappedMovies)

      } catch (error) {
        console.log("Error fetchaing data", error)
				throw error
      }
    }

    tryingToFetch()

  },[search])

  const handleSubmit = (e) => {
    e.preventDefault()

    if(onSearch === '' || !onSearch){
      console.log("false")
    }else{
      setSearch(onSearch)
    }
  }

  const handleChange = (e) => {

    const query = e.target.value
    setOnSearch(query)
    // setSearch(query)

  }


  return (

    <div className='w-full '>

      <header>
        <h1 className='font-bold text-5xl text-gray-50 w-fit mx-auto mt-10'>MOVIE SEARCHER</h1>
      </header>

      <nav className='w-fit my-10 mx-auto'>
        <form onSubmit={handleSubmit} className='flex gap-3'>

          <input onChange={handleChange} className='bg-violet-900 text-gray-50 font-semibold p-3 rounded-lg focus:outline-none focus:bg-violet-700 transition-colors duration-300 ease-in-out' type="text" name='query' title='search' placeholder='Search a movie' />
          <button className='bg-violet-900 text-gray-50 font-semibold p-3 rounded-lg hover:bg-violet-700 transition-colors duration-300 ease-in-out'  type='submit'>Search</button>

        </form>
      </nav>

      <main className='w-full p-10'>
        <div className='justify-items-center gap-10 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]'>

          {
            movies?.length > 0
              ? (
                movies.map(movie => (
                  <div key={movie.id} className='flex flex-col items-center'>

                    <img className='rounded-lg' src={movie.image} alt={movie.title} />
                    <h3 className='my-2 text-2xl font-semibold text-gray-50'>{movie.title}</h3>
                    <p className='text-lg font-medium text-gray-50'>{movie.year}</p>
                  </div>
                ))
              ) : (
                <span className='font-bold text-gray-50'>Movies not found</span>
              )
          }
          
        </div>
      </main>

    </div>
  )

}

export default App
