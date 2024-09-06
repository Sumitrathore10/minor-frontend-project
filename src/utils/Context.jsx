import axios from '../utils/Axios'
import React, { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext()


const Context = (props) => {
    const [products,setProducts] = useState(null)

    const getproduct = async()=>{
        try {
            const {data} = await axios("/products")
            setProducts(data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getproduct()
    },[])

  return (
   
    <ProductContext.Provider value={[products,setProducts]}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default Context
