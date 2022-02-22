import React from 'react';
import { Contact } from '../components/Contact';
import {Navbar } from '../components/Navbar'
import {Footer} from '../components/footer';
import {Card} from '../components/Card'



export function Places(){
    return(
    <>

    <header>
        <Navbar/>
    </header>

   <main>
     
<Card/>
  
   </main>
   
   

  <section>

  <Contact/> 
  
  </section>

            <Footer/>
      

    </>

    )
}