import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import styles from './app.module.css'
import MainLayout from './layouts/MainLayout/MainLayout'
import Genre from './pages/Genre'
import Movies from './pages/Movies'
import PageNotFound from './pages/PageNotFound'

function App() {
  return (
    <MainLayout>
      <div className={styles.container}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/movies" />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/genre/:genreId" element={<Genre />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </MainLayout>
  )
}

export default App
