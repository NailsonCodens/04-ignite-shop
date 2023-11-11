import { useRouter } from 'next/router'
import { ImageContainer, ProductContainer, ProductDetails } from '../../../styles/pages/product'

export default function Product(){
  const {query} = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>
      </ImageContainer>
      <ProductDetails>
        <h1>Camiseta x</h1>
        <span>R$ 79,00</span>
        <p>Lorem ipsum</p>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer> 
  )
}