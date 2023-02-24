import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {
  Home,
  SingleProduct,
  Cart,
  Error,
  Products,
  PrivateRoute,
  Checkout,
  About,
  AuthWrapper,
} from './pages'

import styled from 'styled-components'

function App() {
  return (
    <div>
      <AuthWrapper>
        <Router>
          <Navbar />
          <Sidebar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route exact path='/products'>
              <Products />
            </Route>
            <Route exact path='/cart'>
              <Cart />
            </Route>
            <Route exact path='/products/:id' children={<SingleProduct />} />
            <PrivateRoute exact path='/checkout'>
              <Checkout />
            </PrivateRoute>
            <Route exact path='*'>
              <Error />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthWrapper>
    </div>
  )
}

export default App
