import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'

const root = ReactDOM.createRoot(document.getElementById('root'))

// dev-rcozhnwc5v5d8qdu.us.auth0.com
// 23pvumkTdKYKM8DJJuoJmQKk54NwrGJS

root.render(
  <Auth0Provider
    domain='dev-rcozhnwc5v5d8qdu.us.auth0.com'
    clientId='23pvumkTdKYKM8DJJuoJmQKk54NwrGJS'
    redirectUri={window.location.origin}
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
)
