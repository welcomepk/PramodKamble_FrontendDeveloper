
import { nanoid } from "nanoid"
import Banner from "./components/Banner"
import SpacexData from './components/SpacexData'


function App() {
  return <main className=''>
    <Banner />
    <SpacexData dataType={'capsules'} />
  </main>
}

export default App
