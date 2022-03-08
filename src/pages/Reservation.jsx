import React from 'react'

import {Navbar} from '../components/Navbar'
import { Form } from '../components/form'

export function Reservation(){
    return(
        <>
        <header>
        <Navbar/>
        </header>
      
        <div className="banneer">
        <div className='contenido container'>
      <h2>¿Encuentra tu  Proxima Aventura?
        
     </h2>


     </div>
    </div>
     <h2 className="text-center text-secondary mt-4">¡Bienvenido a nuestro <br/> sistema de Reservaciones!</h2>
        
     


        </>
    )
}