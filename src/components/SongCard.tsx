import { useMusicContext } from '../context/MusicProvider'
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled'
import Lottie from 'react-lottie-player'
import lottieJson from '../assets/17555-audio-playing.json'

interface Props {
  result: any
}
const SongCard = ({ result }: Props) => {
  const { play, setPlayFunc, setCurrentSongFunc, currentSong } =
    useMusicContext()
  const playSong = () => {
    if (result.id !== currentSong.id) {
      setPlayFunc(true)
      setCurrentSongFunc(result)
    }else {
      setPlayFunc(!play)
      setCurrentSongFunc(result)
    }
   
  }
  return (
    <div className="bg-gray-900 shadow-lg rounded p-3">
      <div className="group relative">
        <img
          className="w-full h-72 md:w-72 block rounded mx-auto"
          src={result.album.cover_medium}
          loading="lazy"
          alt=""
        />
        <div
          className={`absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 ${
            play && result.id === currentSong.id ? 'bg-opacity-60' : ''
          } w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly`}
        >
          <button
            className={`hover:scale-110 group-hover:translate-y-0 group-hover:opacity-100 text-white ${
              play && result.id === currentSong.id ? 'opacity-100' : 'opacity-0'
            } transform translate-y-3   transition`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
          </button>

          <button
            onClick={playSong}
            className={`hover:scale-110 group-hover:translate-y-0 group-hover:opacity-100 text-white ${
              play && result.id === currentSong.id ? 'opacity-100' : 'opacity-0'
            } transform translate-y-3   transition`}
          >
            {play && result.id === currentSong.id ? (
              <PauseCircleFilledIcon
                style={{ fontSize: 48 }}
              ></PauseCircleFilledIcon>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-play-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
              </svg>
            )}
          </button>

          <button
            className={`hover:scale-110 group-hover:translate-y-0 group-hover:opacity-100 text-white ${
              play && result.id === currentSong.id ? 'opacity-100' : 'opacity-0'
            } transform translate-y-3   transition`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-three-dots"
              viewBox="0 0 16 16"
            >
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
          </button>
          {play && result.id === currentSong.id ? (
            <Lottie
              loop
              animationData={lottieJson}
              play
              className="absolute w-20 bottom-0"
              style={{ width: 100 }}
            />
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-white text-lg">{result.title}</h3>
        <p className="text-gray-400">{result.artist.name}</p>
      </div>
    </div>
  )
}
export default SongCard
