import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

//Components
import Header from './Components/Header'
import Features from './Components/Features'
import StaySection from './Components/StaySection'
import QuoteSection from './Components/QuoteSection'
import EmailSignup from './Components/EmailSignup'
import Footer from './Components/Footer'

function App() {

  return (
    <div>
      <Header />
      <Features />
      <StaySection />
      <QuoteSection />
      <EmailSignup />
      <Footer />
    </div>
  )
}

export default App
