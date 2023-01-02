import axios from 'axios'

export const SearchService = (searchTerm: string) => {
  const options = {
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_KEY,
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
    },
  }
  const response = axios.get(
    `https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchTerm}`,
    options
  )
  return response
}
