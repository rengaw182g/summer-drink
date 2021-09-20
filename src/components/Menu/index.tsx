import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { api } from '../../services/Api';

interface Categorys {
    strCategory: string;
}

const Menu: React.FC = () => {

    const [category, setCategory] = useState<Categorys[]>([]);

    useEffect(() => {
        async function listCategory(): Promise<void> {
            const result = await api.get(`/list.php?c=list`);
            const { drinks: data } = result.data;
            setCategory(data);
            console.log('drinks', data);
        }
        listCategory();
    }, [])

    return (
        <Container>
            {category.map((cat) => (
                <a key={cat.strCategory} href="">
                    {cat.strCategory}
                </a>
            ))}
        </Container>
    )
}

export default Menu;