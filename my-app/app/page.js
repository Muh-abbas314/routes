'use client'
import axiosInterceptorInstance from './axiosInterceptor'

import Image from 'next/image'
import { useState,useEffect } from 'react'


export default function Home() {
  
  const [state,setState]=useState("")
  useEffect(()=>{
    dataFetch();
  console.log(state)
 
  
  },[])
  
  const dataFetch=async()=>{
    const response=await axiosInterceptorInstance.get('https://fakestoreapi.com/products')
    setState(response)
  }
   
  console.log(state)
  // const data=JSON.stringify(state)
  return (
    <>Hello I'm the 5th object filtered from the interceptor 
    Object info:
    <img src={state.image} width={140} height={30}/>
    {state.title}
    
    {state. id}

    {state.description}
    </>
  )
}
