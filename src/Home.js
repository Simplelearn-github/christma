import React from 'react'
import { Aboutus } from './container/Aboutus'
import { Dashboard } from './container/Dashboard'
import { Foot } from './container/Foot'
import { Header } from './container/Header'




export const Home = () => {
  return (
    <div className='home'>
    
        <Header/>
        <Dashboard/>
        <Aboutus/>
        <Foot/>
    </div>
  )
}
