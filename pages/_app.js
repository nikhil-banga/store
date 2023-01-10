import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/globals.css'
import { useState,useEffect } from 'react';
function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  useEffect(() => {
    console.log("what is going on here")
    try {
      if(localStorage.getItem("cart")){
        setCart(JSON.parse(localStorage.getItem("cart")))
      }
    } catch (error) {
      console.error(error);
      localStorage.clear()
    }
    return () => {
      
    }
  }, [])
  
  const saveCart=(myCart)=>{
    localStorage.setItem("cart",myCart)
  }
  const addtoCart = (itemCode,qty,price,names,size,variant)=>{
    let newCart = cart;
    if(itemCode in cart){
      newCart[itemCode].qty = cart[itemCode].qty + qty
      
    }
    else{
      newCart[itemCode] = {qty:1 ,price,names,size,variant}
    }
    setCart(newCart)
    saveCart(newCart)
  }

  const clearCart=()=>{
    setCart({})
    saveCart({})
  }
  const removeFromCart = (itemCode,qty,price,names,size,variant)=>{
    let newCart = cart;
    if(itemCode in cart){
      newCart[itemCode].qty = cart[itemCode].qty - qty
      
    }
    if(newCart[itemCode]["qty"]<=0){
      delete newCart[itemCode]
    }
    else{
      newCart[itemCode] = {qty:1 ,price,names,size,variant}
    }
    setCart(newCart)
    saveCart(newCart)
  }
  return<>
    <Navbar className=""/>  
    <Component {...pageProps} />
    <Footer/>
   

  </>
}

export default MyApp
