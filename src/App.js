import React, { useState } from 'react'
import CourseList from './component/CourseList'
function App() {
  const [products, setProducts] = useState([])
    const addProduct = (product) =>{
      setProducts([...products, product])
    
}
  return (
    <div className='App'>
      <CourseList addProductProp={addProduct} />
    </div>
  )
}

export default App
