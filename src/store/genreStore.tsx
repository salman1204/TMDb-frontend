import create from 'zustand'
import { persist } from 'zustand/middleware'

interface CurrentGenre {
  currentGenre: string
  setCurrentGenre: (payload: string) => void
}

export const useStore = create(
  persist<CurrentGenre>(
    (set, get) => ({
      currentGenre: '',
      setCurrentGenre: (payload: string) =>
        set((state) => ({ currentGenre: payload })),
    }),
    {
      name: 'current-genre',
      getStorage: () => localStorage,
    }
  )
)
