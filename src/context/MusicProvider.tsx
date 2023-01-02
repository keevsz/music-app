import { createContext, useContext, useState } from 'react'

type ContextProps = {
  play: boolean
  setPlayFunc: (play: boolean) => void
  currentSong: any
  setCurrentSongFunc: (currentSong: string) => void
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const MusicContext = createContext<ContextProps>({} as ContextProps)

export const MusicProvider = ({ children }: Props) => {
  const [play, setPlay] = useState<boolean>(false)
  const [currentSong, setCurrentSong] = useState<any>('')

  const setPlayFunc = (play: boolean) => setPlay(play)
  const setCurrentSongFunc = (currentSong: any) => setCurrentSong(currentSong)

  return (
    <MusicContext.Provider
      value={{ play, setPlayFunc, currentSong, setCurrentSongFunc }}
    >
      {children}
    </MusicContext.Provider>
  )
}

export const useMusicContext = () => {
  const context = useContext(MusicContext)
  if (context === undefined) {
    throw new Error('useMusicContext undefined here')
  }
  return context
}
