import React, { useEffect, useState } from 'react';
import { api } from '../../services/Api';
import { Link } from 'react-router-dom';
import { Wrapper,Top,Category,Menu } from './styles';
import logo from '../../assets/logo.png';

interface Category {
    strCategory: string;
}

const Header:React.FC = () => {
        
    const [category, setCategory] = useState<Category[]>([]);

    useEffect(() => {
        async function listCategory(): Promise<void> {
            const result = await api.get(`/list.php?c=list`);
            const { drinks: data } = result.data;
            setCategory(data);
        }
        listCategory();
    }, [])

    return(
        <Wrapper>
        <Top>
            <Link to="/">
            <img src={logo} height="36" alt="Summer Drinks"/>
                Summer Drink.
            </Link>         
        </Top>
        <Category>
            <Menu>
                {category.map((cat) => (
                    <Link key={cat.strCategory} to={`/filter.php?g=${cat.strCategory}`}>
                        {cat.strCategory}
                    </Link>
                ))}
            </Menu>
        </Category>
        </Wrapper>
    )
}

export default Header;