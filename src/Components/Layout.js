import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

export const Layout = (props) => {
  return (
    <div>
<Header/>

<hr />
            <br />
            <br />
            {props.children}
            <br />
            <br /> 
            <hr />
            <br />
            <br /> 
            <hr />
            <br />
            <br /> 
            <hr />
            <Footer />
            <br />
            <br /> 










    </div>
  )
}
