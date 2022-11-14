import create from 'zustand'
import { persist } from 'zustand/middleware'
import { movie } from '../utils/types/movie'

interface Watchlist {
  watchlist: movie[]
  setWatchlist: (payload: movie) => void
}

export const useStore = create(
    persist<Watchlist>(
      (set, get) => ({
        watchlist: [],
        setWatchlist: (payload: movie) =>
          set((state) => ({ watchlist: [...state.watchlist, payload] })),
      }),
      {
        name: 'watchlist',
        getStorage: () => localStorage,
      }
    )
  )