import React from 'react'

import SiteHeader from '../components/siteHeader'
import SiteFooter from '../components/siteFooter'
import AboutUs from '../components/aboutUs'
import Services from '../components/services'
import Doctors from '../components/doctors'
import Appointment from '../components/appointment'
import Testimonials from '../components/testimonials'

const ecomedicaPage = () => {
  return (
    <div className='flex min-h-screen flex-col' >
      
      <SiteHeader />

      <main className='flex-1'>
        <AboutUs/>
        <Services/>
        <Doctors/>
        <Appointment/>
        <Testimonials/>
      </main>

      <SiteFooter />

    </div>
  )
}

export default ecomedicaPage
