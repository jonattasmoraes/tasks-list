import AddButton from '../../components/addButton/addButton'
import SideBar from '../../containers/sidebar/sidebar'
import TasksList from '../../containers/tasksList/tasksList'

const Home = () => (
  <>
    <SideBar showFilters />
    <TasksList />
    <AddButton />
  </>
)

export default Home
