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
// oNVJ8bIA4Ta2X5cpmMunafS95ESlQzIW
root.render(
  <Auth0Provider
    domain='dev-rcozhnwc5v5d8qdu.us.auth0.com'
    clientId='oNVJ8bIA4Ta2X5cpmMunafS95ESlQzIW'
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
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
