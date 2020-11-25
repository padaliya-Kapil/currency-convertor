import React from 'react'
import Header from './components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import HomeScreen from './screens/HomeScreen'
import RatesScreen from './screens/RatesScreen'

function App() {
  return (
    <Router>
      <Header />
      <Container className='p-3'>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/rates' component={RatesScreen} exact />
      </Container>
    </Router>
  )
}

export default App
