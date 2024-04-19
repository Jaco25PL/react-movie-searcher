
export async function fetching ({ search }) {

    if(search === '') return null

    // const API_KEY = '4287ad07'
    const URL = `https://ott-details.p.rapidapi.com/search?title=${search}&page=1`
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9652870f74mshb8eaa011e895897p16ecc7jsn4a254c9aaf4c',
            'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
        }
    };
    

    try {

        // const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const response = await fetch(URL, options)
        if(!response.ok){
            throw new Error(`Failed to fetch data. Status: ${response.status}`)
        }
        
        const movies = await response.json()
        // console.log(movies.results.filter(movie => movie.imageurl?.length > 0))

        const mappedMovies = movies.results?.filter(movie => movie.imageurl?.length > 0).map(movie => ({
          id: movie.imdbid,
          image: movie.imageurl[0],
          title: movie.title,
          year: movie.released,
          type: movie.type
        }))
        // const mappedMovies = movies.Search?.map(movie => ({
        //   id: movie.imdbID,
        //   image: movie.Poster,
        //   title: movie.Title,
        //   year: movie.Year,
        //   type: movie.type
        // }))


        // console.log(mappedMovies)

        return mappedMovies 

        } catch (error) {
            console.log("Error fetchaing data", error)
            throw error
        } 
}
