import React, { useEffect, useState } from 'react';
import {Title, Container} from './styles';
import { api } from '../../services/Api';

interface DetailsDrink{
    idDrink:number;
    strDrink:string;
    strDrinkThumb: string;
}

const Detail:React.FC = () => {

    const [idDrink,setIdDrink] = useState(11007);
    const [details,setdetails] = useState<DetailsDrink[]>([]);

    useEffect(()=>{
        async function showDetails():Promise<void>{
            const result = await api.get(`/lookup.php?i=${idDrink}`);
            const { drinks:data} = result.data;
            setdetails(data);
            //console.log('detalhes',data);
        }
        showDetails();
    },[])

    return (
        <> 
        <Title>Detalhes</Title>
        <Container>
            {details.map((obj) => (
                <a key={obj.idDrink} href="#">
                    <img src={obj.strDrinkThumb} alt=""/>
                    <div>
                        <strong>{obj.strDrink}</strong>
                    </div>
                </a>                      
                )
            )}            
        </Container>
        </>
    )
}

export default Detail;