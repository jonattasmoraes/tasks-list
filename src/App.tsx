import TasksList from './containers/tasksList/tasksList'
import SideBar from './containers/sidebar/sidebar'
import StiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <StiloGlobal />
      <Container>
        <SideBar />
        <TasksList />
      </Container>
    </>
  )
}

export default App
