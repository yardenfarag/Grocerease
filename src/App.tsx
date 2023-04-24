import { AppHeader } from './components/AppHeader'
import './styles/main.scss'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { HomePage } from './views/HomePage'
import { StoreDetailsPage } from './views/StoreDetailsPage'
import { StoresPage } from './views/StoresPage'

import i18n from 'i18next'
import { initReactI18next, useTranslation } from 'react-i18next'
import { Suspense, useState } from 'react'

const translationEn = {welcome: 'Welcome!!'}
const translationHe = {welcome: 'שלוםםםםם'}
i18n.use(initReactI18next).init({
  resources: {
    en: { translationEn: translationEn},
    he: { translationHe: translationHe}
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {escapeValue: false}
})

function App() {
  const [lngStyle, setLngStyle] = useState('rtl')
  const {t} = useTranslation()
  const changeLngHandler = (lng:string) => {
    if (lng === 'he') {
      setLngStyle('rtl')
    } else {
      setLngStyle('')
    }
    // i18n.changeLanguage(ev.target.value)
    
  }
  return (
      <div className={lngStyle}>
    <Suspense fallback='Loading...'>
    <Router>
      <AppHeader onChangeLng={changeLngHandler} />
      
      {/* <h2>{t('welcome')}</h2> */}
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/store' element={<StoresPage/>}/>
        <Route path='/store/:id' element={<StoreDetailsPage/>}/>
      </Routes>
    </Router>
    </Suspense>
      </div>
  )
}

export default App
