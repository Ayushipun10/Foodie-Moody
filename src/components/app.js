import React from 'react'
import Header from './header/Header'
import  ReactDOM  from 'react-dom/client'

const App = () => {
  return (
   <Header/>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)
export default App