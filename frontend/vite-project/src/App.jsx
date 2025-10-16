import { useState } from 'react'
import SiteHeader from './components/siteHeader'
import SiteFooter from './components/siteFooter'
import AboutUs from './components/aboutUs'
import Services from './components/services'
import Doctors from './components/doctors'
function App() {
  
  return (
    <div className='flex min-h-screen flex-col'>
      <SiteHeader />

      <main className='flex-1'>
        <AboutUs/>
        <Services/>
        <Doctors/>
      </main>
      
      <SiteFooter />
    </div>
  )
}

export default App
