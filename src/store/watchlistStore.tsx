import create from 'zustand'
import { persist } from 'zustand/middleware'
import { movie } from '../utils/types/movie'

interface Watchlist {
  watchlist: movie[]
  addToWatchlist: (payload: movie) => void
  removeFromWatchlist: (id: number) => void
}

export const useStore = create(
  persist<Watchlist>(
    (set, get) => ({
      watchlist: [],
      addToWatchlist: (payload: movie) =>
        set((state) => ({ watchlist: [...state.watchlist, payload] })),
      removeFromWatchlist: (id: number) => {
        set((state) => ({
          watchlist: state.watchlist.filter((movie) => movie.id !== id),
        }))
      },
    }),
    {
      name: 'watchlist',
      getStorage: () => localStorage,
    }
  )
)
