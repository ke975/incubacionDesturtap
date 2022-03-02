import React from 'react'


import { Navbar } from "../components/Navbar"
import '../styles/banneer.scss'
import {Contact} from '../components/Contact'
import {Footer} from '../components/footer'
export function Home(){
    return(
        <div>
        <header>
            <Navbar/>
        </header>
        <div className="banneer">
        <div className='contenido container'>
      <h2>¿Encuentra tu  Proxima Aventura?
        
     </h2>


     </div>
        </div>
        <section>
            <h3 className="text-center mt-5" > <strong> Lugares mas frecuentados <br/> de<br/> Nicaragua </strong></h3>
        </section>
        
        <div className="container">
	<figure > 
		
		<img className='data-toggle="tooltip ' title="Tooltip on top" src="https://lugaresturisticos365.com/wp-content/uploads/San-Juan-del-Sur.jpg" alt="A windmill" />
	</figure>
	<p className="text-center">5Estrellas</p>
	<figure>
		
		<img src="https://www.adonde-y-cuando.es/site/images/illustration/matagalpa.jpg" alt="The Clifton Suspension Bridge" />
		
	</figure>
	<figure>
		<img src="https://lugaresturisticos365.com/wp-content/uploads/Reserva-Natural-Volcan-Mombacho.jpg" alt="Sunset and boats" />
	</figure>
	<figure>
		<img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/20/05/05/dc/magnific-rock-surf-resort.jpg?w=900&h=-1&s=1" alt="a river in the snow" />
	</figure>
	<figure>
		<img src="https://img.directhotels.com/ni/managua/barcelo-montelimar-beach-managua/1.jpg" alt="a single checked balloon" />
	</figure>
	<figure>
		<img src="https://assets.codepen.io/12005/dog-balloon.jpg" alt="a hot air balloon shaped like a dog" />
	</figure>
	<figure>
		<img src="https://assets.codepen.io/12005/abq-balloons.jpg" alt="View from a hot air balloon of other balloons" />
	</figure>
	<figure>
		<img src="https://assets.codepen.io/12005/disney-balloon.jpg" alt="a balloon fairground ride" />
	</figure>

</div>

       <Contact/>

        <Footer/>

        </div>
    )
}