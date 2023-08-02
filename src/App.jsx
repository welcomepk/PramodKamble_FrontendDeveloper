
import { nanoid } from "nanoid"
import Banner from "./components/Banner"
import SpacexData from './components/SpacexData'


function App() {
  return <>
    <Banner />
    <SpacexData dataType={'capsules'} />
  </>
}

export default App
