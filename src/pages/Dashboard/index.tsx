import React, { useState,FormEvent, useEffect } from 'react';
import { Wrapper,ContainerFeature, Title,Subtitle, Form, Alert, Drinks } from './styles'
import { Link } from 'react-router-dom';
import Drink from '../../models/Drink';
import { api } from '../../services/Api';
import {FaSearch, FaUndo} from 'react-icons/fa';
// import Context from '../../contextApi/Context';

const Dashboard: React.FC = () => {
    
    const [find,setFind] = useState<string>('');
    const [drinks,setDrinks] = useState<Drink[]>([]);
    // const {idDrink,strDrink} = useContext(Context);
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
            if(!data){
                setError('No drinks found.');
            }else{
                setError('');
            }
        } catch (err) {
            setError('No drinks found.');
        }
        // console.log('find',data);
    }

    return (
        <>
        <Wrapper>      
            <ContainerFeature> 
            <Title>Featured Drinks</Title>
            <Subtitle>Find the most famous drink recipes here..</Subtitle>
            <Form onSubmit={findDrink}>
                <input
                type="search"
                    value={find}
                    onChange={(e) => setFind(e.target.value)}
                    placeholder="Find drink..."></input>
                <button type="submit"><FaSearch size="22"/></button>
            </Form>
                {error && <Alert>{error}</Alert>
                    // <Link to="/" ><FaUndo size="20"/>Voltar</Link>
                }
            </ContainerFeature>
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
            </Wrapper>
        </>
    )
}

export default Dashboard;