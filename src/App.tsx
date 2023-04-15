import { AppHeader } from './components/AppHeader'
import './styles/main.scss'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { HomePage } from './views/HomePage'
import { LocationDetailsPage } from './views/LocationDetailsPage'
import { LocationsPage } from './views/LocationsPage'

function App() {

  return (
    <Router>
      <AppHeader />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/location' element={<LocationsPage/>}/>
        <Route path='/location/:id' element={<LocationDetailsPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
