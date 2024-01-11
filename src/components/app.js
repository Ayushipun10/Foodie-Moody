import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import Header from './header/Header'
import  ReactDOM  from 'react-dom/client'
import Body from './cards/RestaurantBody'
import Filter from './filter/filter'

const App = () => {

  const [selectedCategory, setSelectedCategory] = useState()
  const [inputSearchValue, setInputSearchValue] = useState("")
  
  

  return (
  <>
   <Header setInputSearchValue={setInputSearchValue} />
   <Filter setSelectedCategory={setSelectedCategory}
   />
   <Body selectedCategory={selectedCategory}
    inputSearchValue={inputSearchValue}
    
   />
   </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)
export default App