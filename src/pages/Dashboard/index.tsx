import React, { useState, FormEvent, useEffect } from 'react';
import { Title, Alert, Form, Drinks } from './styles'
import { Link } from 'react-router-dom';
import { api } from '../../services/Api';

interface Drinks {
    idDrink: number;
    strDrink: string;
    strDrinkThumb: string;
    strInstructions: string;
}

const Dashboard: React.FC = () => {

    const [find, setFind] = useState('');
    const [drinks, setDrinks] = useState<Drinks[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        async function listDrinks(): Promise<void> {

            const result = await api.get(`search.php?s=`);
            const { drinks: data } = result.data;
            setDrinks(data);
            // console.log('drinks',data);

        }
        listDrinks();
    }, [])

    async function findDrink(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();
        try {
            const result = await api.get(`/search.php?s=${find}`);
            const { drinks: data } = result.data;
            setDrinks(data);
            setFind('');
        } catch (err) {
            setError('Nenhum Drink encontrado');
        }
        // console.log('find',data);
    }

    return (
        <>
            <Form onSubmit={findDrink}>
                <input
                    value={find}
                    onChange={(e) => setFind(e.target.value)}
                    placeholder="Busque seu drink..."></input>
                <button type="submit">Buscar</button>
            </Form>
            <Title>Drinks em destaque</Title>
            {error && <Alert>{error}</Alert>}
            <Drinks>
                {drinks ? drinks.map((obj) => (
                    <Link key={obj.idDrink} to={`/detalhes/${obj.idDrink}`} >
                        <img src={obj.strDrinkThumb} alt={obj.strDrink} />
                        <div>
                            <strong>{obj.strDrink}</strong>
                        </div>
                    </Link>
                )) : ''}
            </Drinks>
        </>
    )
}

export default Dashboard;