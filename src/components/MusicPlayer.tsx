import { useRef } from 'react'
import ReactHowler from 'react-howler'
import { useMusicContext } from '../context/MusicProvider'

const MusicPlayer = () => {
  const { play, currentSong, setPlayFunc, setCurrentSongFunc } =
    useMusicContext()
  if (!currentSong) return <></>

  console.log(currentSong);

  return (
    <ReactHowler
      src={currentSong.preview}
      onEnd={() => {
        setPlayFunc(false)
        setCurrentSongFunc('')
      }}
      playing={play}
    />
  )
}
export default MusicPlayer
