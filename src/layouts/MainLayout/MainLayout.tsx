import { ReactNode } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

interface Props {
  children: ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
