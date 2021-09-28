import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { useRouteMatch } from 'react-router-dom';
import { api } from '../../services/Api';

interface DetailsDrink {
    idDrink: string;
    strDrinkThumb: string;
    strDrink: string;
    strInstructions: string;
    strIngredient1: string,
    strIngredient2: string,
    strIngredient3: string,
    strIngredient4: string,
    strIngredient5: string,
    strIngredient6: string,
    strIngredient7: string,
    strIngredient8: string,
    strIngredient9: string,
    strIngredient10: string,
    strIngredient11: string,
    strIngredient12: string,
    strIngredient13: string,
    strIngredient14: string,
    strIngredient15: string,
    strMeasure1: string,
    strMeasure2: string,
    strMeasure3: string,
    strMeasure4: string,
    strMeasure5: string,
    strMeasure6: string,
    strMeasure7: string,
    strMeasure8: string,
    strMeasure9: string,
    strMeasure10: string,
    strMeasure11: string,
    strMeasure12: string,
    strMeasure13: string,
    strMeasure14: string,
    strMeasure15: string
}

const Detail: React.FC = () => {
    const { params } = useRouteMatch<DetailsDrink>();

    const [details, setdetails] = useState<DetailsDrink[]>([]);

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
            {details ? details.map((obj) => (
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
            ) : ''}
        </Container>
    )
}

export default Detail;