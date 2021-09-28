import React, { useState,FormEvent, useEffect } from 'react';
import { Wrapper,ContainerFeature, Title,Subtitle, Form, Alert, Drinks } from './styles'
import { Link } from 'react-router-dom';
import { api } from '../../services/Api';
import {FaSearch, FaUndo} from 'react-icons/fa';
// import Context from '../../contextApi/Context';
interface Drinks {
    idDrink: number;
    strDrink: string;
    strDrinkThumb: string;
    strInstructions: string;
}


const Dashboard: React.FC = () => {
    
    const [find,setFind] = useState<string>('');
    const [drinks,setDrinks] = useState<Drinks[]>([]);
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
                setError('Nenhum Drink encontrado');
            }else{
                setError('');
            }
        } catch (err) {
            setError('Nenhum Drink encontrado');
        }
        // console.log('find',data);
    }

    return (
        <>
        <Wrapper>      
            <ContainerFeature> 
            <Title>Drinks em Destaque</Title>
            <Subtitle>Encontre as receitas dos drinks mais famosos aqui.</Subtitle>
            <Form onSubmit={findDrink}>
                <input
                type="search"
                    value={find}
                    onChange={(e) => setFind(e.target.value)}
                    placeholder="Buscar drink..."></input>
                <button type="submit"><FaSearch size="22"/></button>
            </Form>
                {error && <Alert>{error}<Link to="/" >
                    <FaUndo size="20"/>Voltar</Link></Alert>
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