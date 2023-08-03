
import React, { Suspense } from 'react';
import Banner from "./components/Banner"
import { SpacexDataFallback } from "./components/Fallbacks"
// import SpacexData from './components/SpacexData'
const SpacexData = React.lazy(() => import('./components/SpacexData'));


function App() {
  return <>
    <Banner />
    <Suspense fallback={<SpacexDataFallback />}>
      <SpacexData dataType={'capsules'} />
    </Suspense>
  </>
}


export default App
