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
      <h2>¿Encuentra <br/>tu <br/> Proxima Aventura?<br/>
        
     </h2>


     </div>
        </div>
        <section>
            <h3 className="text-center mt-5" > <strong> Lugares mas frequentados <br/> de<br/> Nicaragua </strong></h3>
        </section>
        
        <div class="container">
	<figure>
		<img src="https://assets.codepen.io/12005/windmill.jpg" alt="A windmill" />
	</figure>
	<figure>
		<img src="https://assets.codepen.io/12005/suspension-bridge.jpg" alt="The Clifton Suspension Bridge" />
	</figure>
	<figure>
		<img src="https://assets.codepen.io/12005/sunset.jpg" alt="Sunset and boats" />
	</figure>
	<figure>
		<img src="https://assets.codepen.io/12005/snowy.jpg" alt="a river in the snow" />
	</figure>
	<figure>
		<img src="https://assets.codepen.io/12005/bristol-balloons1.jpg" alt="a single checked balloon" />
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