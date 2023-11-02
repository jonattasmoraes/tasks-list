import { Provider } from 'react-redux'
import TasksList from './containers/tasksList/tasksList'
import SideBar from './containers/sidebar/sidebar'
import StiloGlobal, { Container } from './styles'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <StiloGlobal />
      <Container>
        <SideBar />
        <TasksList />
      </Container>
    </Provider>
  )
}

export default App
