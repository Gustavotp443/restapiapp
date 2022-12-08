import api from '../../services/api';
import { CardContainer } from './card.styles'
import { useEffect,useState } from 'react';

const Card = ({data, id}) => {
    console.log(id)
    const [stock, setStock]= useState([])

    async function getStock(){
        await api.get(`stock/${id}}`).then((response)=>{
            console.log(response)
            data= response.data
            setStock(data)
        })
    }

    useEffect(()=>{
        getStock();
    },[])

  return (
    <CardContainer>
        <p>{data.title}</p>
        <img src={data.image}/>
        <p>{`R$${data.price}`}</p>
        <p>{stock.amount}</p>
    </CardContainer>
  )
}

export default Card;

