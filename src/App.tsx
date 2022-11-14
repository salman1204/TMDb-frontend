import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import styles from './app.module.css'
import MovieDetails from './components/MovieDetails'
import MainLayout from './layouts/MainLayout/MainLayout'
import Genre from './pages/Genre'
import Movies from './pages/Movies'
import PageNotFound from './pages/PageNotFound'
import Watchlist from './pages/Watchlist'

function App() {
  return (
    <MainLayout>
      <div className={styles.container}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/movies" />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/genre/:genreId" element={<Genre />} />
            <Route path="/movies/:movieId" element={<MovieDetails />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </MainLayout>
  )
}

export default App
