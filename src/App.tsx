import styles from './app.module.css'
import MainLayout from './layouts/MainLayout/MainLayout'
import Movies from './pages/Movies'

function App() {
  return (
    <MainLayout>
      <div className={styles.container}>
        <Movies />
      </div>
    </MainLayout>
  )
}

export default App
