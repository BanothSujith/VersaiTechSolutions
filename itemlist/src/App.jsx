import React from 'react'
import ItemsList from './components/ItemsList'
import sampleItem from './list';
function App() {

  return (
    <div>
      <ItemsList itemsList={sampleItem[0]}/>
    </div>
  )
}

export default App