import axios from 'axios'

export const SearchService = (searchTerm: string) => {
  const options = {
    headers: {
      'X-RapidAPI-Key': '84648be45emsh70dce08b291334ep1f84f1jsn2b6161bcff28',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
    },
  }
  const response = axios.get(
    `https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchTerm}`,
    options
  )
  return response
}
