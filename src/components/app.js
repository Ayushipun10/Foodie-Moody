import React from 'react'
import Header from './header/Header'
import  ReactDOM  from 'react-dom/client'
import Filter from './filter/filter'

const App = () => {
  return (
  <>
   <Header/>
   <Filter/>
   </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)
export default App