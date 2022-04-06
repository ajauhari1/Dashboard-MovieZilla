import {useState, useEffect} from 'react'
import {ref, get} from 'firebase/database'
import { db} from 'libs/firebase'

function useGetAllProducts(path){
    const [productData, setProductData] = useState(null)
    useEffect(()=>{
      //data fetching 
      async function getProducts(){
        const productRef = ref(db, 'products')
        const productSnapShot =  await get(productRef)
        setProductData(Object.values(productSnapShot.val()))
      }

      getProducts()

    },[])

      return productData
}

export {useGetAllProducts}