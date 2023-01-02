import { useState, useRef } from 'react'
import MusicPlayer from './components/MusicPlayer'
import SongCard from './components/SongCard'
import { MusicProvider } from './context/MusicProvider'
import { SearchService } from './services/music.services'

function App() {
  const [results, setResults] = useState([])
  const debounceRef = useRef<any>()


  const onChange = async (searchTerm: string) => {
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      SearchService(searchTerm).then((response) => {
        setResults(response.data.data)
      })
    }, 350)
  }

  return (
    <MusicProvider>
      <div className=" bg-gray-800 border mx-auto text-center min-h-screen">
        <div className="flex">
          <input
            className="bg-gray-800 text-white border w-2/5 mt-2 border-gray-300 p-2 focus:outline-none mx-auto"
            type="text"
            placeholder="Buscar música"
            onChange={(e) => {
              onChange(e.target.value)
            }}
          />
          <span className="text-white">Favoritos</span>
        </div>
        <div className="container mx-auto mt-4">
          <section className="grid grid-cols-1 sm:grid-cols-2 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {results?.map((result: any) => (
              <SongCard key={result.id} result={result}></SongCard>
            ))}
          </section>
        </div>
        <MusicPlayer></MusicPlayer>
      </div>
    </MusicProvider>
  )
}

export default App
