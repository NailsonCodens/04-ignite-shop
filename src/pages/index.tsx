import Image from "next/image"
import { HomeContainer, Product } from "../../styles/pages/home"

import {useKeenSlider} from 'keen-slider/react'

import shirtOne from '../assets/shirts/1.png'
import shirtTwo from '../assets/shirts/2.png'
import shirtThree from '../assets/shirts/3.png'

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={shirtOne} alt="" width={520} height={480}/>

        <footer>
          <strong>Camisexta</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirtTwo} alt="" width={520} height={480}/>

        <footer>
          <strong>Camiseta</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>  
      <Product className="keen-slider__slide">
        <Image src={shirtThree} alt="" width={520} height={480}/>

        <footer>
          <strong>Camiseta</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>   
      <Product className="keen-slider__slide">
        <Image src={shirtThree} alt="" width={520} height={480}/>

        <footer>
          <strong>Camiseta</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>                  
    </HomeContainer>
  )
}
