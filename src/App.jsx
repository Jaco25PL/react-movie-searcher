import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App() {

  const { search, setSearch, error } = useSearch()
  const { movies, loading , getMovies } = useMovies({ search }) 

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(!error){
      getMovies({search})
    }
  }
  
  const handleChange = (e) => {
    const newSearch = e.target.value
    setSearch(newSearch)
  }

  return (

    <div className='w-full '>
      <header>
        <h1 className='font-bold text-5xl text-gray-50 w-fit mx-auto mt-10'>MOVIE SEARCHER</h1>
      </header>
      <nav className='w-fit my-10 mx-auto flex flex-col items-center'>
        <form onSubmit={handleSubmit} className='flex gap-3 mb-3'>
          <input onChange={handleChange} type="text" name='query' title='search' placeholder='Search a movie' className={` bg-violet-900 text-gray-50 font-semibold p-3 rounded-lg focus:outline-none focus:bg-violet-700 transition-colors duration-300 ease-in-out`}  />
          <button className='bg-violet-900 text-gray-50 font-semibold p-3 rounded-lg hover:bg-violet-700 transition-colors duration-300 ease-in-out'  type='submit'>Search</button>
        </form>

        <span className='text-red-500'>{error}</span>
     
      </nav>
      <main className='w-full p-10'>
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



// const [ search, setSearch ] = useState('deadpool') // what we have from the input
// const [ error, setError ] = useState(false)

// const handleSubmit = (e) => {
    // const field = new window.FormData(e.target)
    // const query = field.get('query') 
  
    // if(query.length < 3){
    //   // setError(true)
    //   return
    // }else{
    //   // setError(false)
    //   setSearch(query)
    // }
// }
