import React, { useState } from 'react'
import Header from './header/Header'
import  ReactDOM  from 'react-dom/client'
import Body from './cards/RestaurantBody'
import Filter from './filter/filter'

const App = () => {

  const [selectedCategory, setSelectedCategory] = useState()
 
  return (
  <>
   <Header/>
   <Filter setSelectedCategory={setSelectedCategory}/>
   <Body selectedCategory={selectedCategory}/>
   </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)
export default App