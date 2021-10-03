import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { useRouteMatch } from 'react-router-dom';
import DetailDrink from '../../models/DetailDrink';
import { api } from '../../services/Api';

const Detail: React.FC = () => {
    const { params } = useRouteMatch<DetailDrink>();

    const [details, setdetails] = useState<DetailDrink[]>([]);

    useEffect(() => {
        async function showDetails(): Promise<void> {
            const result = await api.get(`/lookup.php?i=${params.idDrink}`);
            const { drinks: data } = result.data;
            setdetails(data);
        }
        showDetails();
    }, [])

    return (
        <Container>
            {details ? details.map((obj) => {
                return (
                <div key={obj.idDrink}>
                    <section>
                        <img src={obj.strDrinkThumb} alt={obj.strDrink} />
                    </section>
                    <section>
                        <h1>{obj.strDrink}</h1>
                        <h2>Instructions</h2>
                        <p>{obj.strInstructions}</p>
                        <h2>Ingredients</h2>
                        <ul>
                           <li> {obj.strIngredient1} <b>{obj.strMeasure1}</b></li>
                           <li> {obj.strIngredient2} <b>{obj.strMeasure2}</b></li>
                           <li> {obj.strIngredient3} <b>{obj.strMeasure3}</b></li>
                           <li> {obj.strIngredient4} <b>{obj.strMeasure4}</b></li>
                           <li> {obj.strIngredient5} <b>{obj.strMeasure5}</b></li>
                           <li> {obj.strIngredient6} <b>{obj.strMeasure6}</b></li>                          
                        </ul>
                    </section>
                </div>
                )
            }) : ''}        
        </Container>
    )
}

export default Detail;