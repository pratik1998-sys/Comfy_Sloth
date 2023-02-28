import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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

function App() {
  return (
    <div>
      <AuthWrapper>
        <Router>
          <Navbar />
          <Sidebar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='products' element={<Products />} />
            <Route path='cart' element={<Cart />} />
            <Route path='products/:id' element={<SingleProduct />} />
            <Route
              path='checkout'
              element={
                <PrivateRoute>
                  <Checkout />
                </PrivateRoute>
              }
            />
            <Route path='*' element={<Error />} />
          </Routes>
          <Footer />
        </Router>
      </AuthWrapper>
    </div>
  )
}

export default App
