import create from 'zustand'
import { persist } from 'zustand/middleware'
import { movie } from '../utils/types/movie'

interface RecentlyVisitedMovieslist {
  recentlyVisitedMovies: movie[]
  addToList: (payload: movie) => void
  removeFromRecentlyVisitedList: (id: number) => void
  removeLastRecentlyVisitedList: () => void
}

export const useStore = create(
  persist<RecentlyVisitedMovieslist>(
    (set, get) => ({
      recentlyVisitedMovies: [],
      addToList: (payload: movie) =>
        set((state) => ({
          recentlyVisitedMovies: [payload, ...state.recentlyVisitedMovies],
        })),
      removeFromRecentlyVisitedList: (id: number) => {
        set((state) => ({
          recentlyVisitedMovies: state.recentlyVisitedMovies.filter(
            (movie) => movie.id !== id
          ),
        }))
      },
      removeLastRecentlyVisitedList: () => {
        set((state) => ({
          recentlyVisitedMovies: state.recentlyVisitedMovies.slice(0, -1),
        }))
      },
    }),
    {
      name: 'recently_visited_movies',
      getStorage: () => localStorage,
    }
  )
)
