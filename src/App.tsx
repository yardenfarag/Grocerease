import { AppHeader } from './components/AppHeader'
import './styles/main.scss'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { HomePage } from './views/HomePage'
import { StoreDetailsPage } from './views/StoreDetailsPage'
import { StoresPage } from './views/StoresPage'

function App() {
  return (
    <Router>
      {/* <h2>{t('welcome')}</h2> */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/store' element={<StoresPage />} />
        <Route path='/store/:id' element={<StoreDetailsPage />} />
      </Routes>
    </Router>
  )
}

export default App
