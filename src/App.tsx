import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import StiloGlobal, { Container } from './styles'

import store from './store'
import Home from './pages/home/index'
import Register from './pages/register'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/new',
    element: <Register />
  }
])

function App() {
  return (
    <Provider store={store}>
      <StiloGlobal />
      <Container>
        <RouterProvider router={routes} />
      </Container>
    </Provider>
  )
}

export default App
