import { lazy, Suspense } from 'react'
import { Spinner } from 'react-bootstrap'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import styles from './app.module.css'

const Movies = lazy(() => import('./pages/Movies'))
const Watchlist = lazy(() => import('./pages/Watchlist'))
const Genre = lazy(() => import('./pages/Genre'))
const MainLayout = lazy(() => import('./components/layouts/MainLayout/MainLayout'))
const MovieDetails = lazy(() => import('./components/MovieDetails'))
const PageNotFound = lazy(() => import('./pages/PageNotFound'))

function App() {
  const fallBack = (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #1F1F1F 0%, #000000 100%)',
      }}
    >
      <div className={styles.spinner}>
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
      </div>
    </div>
  )

  return (
    <Suspense fallback={fallBack}>
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
    </Suspense>
  )
}

export default App
