import React, { useEffect, useState } from 'react';
import Category from '../../models/Category';
import { api } from '../../services/Api';
import { Link } from 'react-router-dom';
import { Wrapper,Top,ContainerMenu,Menu } from './styles';
import logo from '../../assets/logo.png';

const Header:React.FC = () => {
        
    const [category, setCategory] = useState<Category>();
    const [categorys, setCategorys] = useState<Category[]>([]);

    useEffect(() => {
        async function listCategory(): Promise<void> {
            const result = await api.get(`/list.php?c=list`);
            const { drinks: data } = result.data;
            setCategorys(data);
        }
        listCategory();
    }, [])

    useEffect(() => {
  async function navigateCategory(): Promise<void> {
        const result = await api.get(`/filter.php?g=${category}`);
        const { category: data } = result.data;        
    }
    navigateCategory();
    }, [category])  

    function updateCategory (params:Category){
        setCategory(params)
    }

    return(
        <Wrapper>
        <Top>
            <Link to="/dashboard">
            <img src={logo} height="36" alt="Summer Drinks"/>
                Summer Drink.
            </Link>         
        </Top>
        <ContainerMenu>
            <Menu>
                {categorys.map((cat) => (
                    <Link key={cat.strCategory} to="/"  >
                        {cat.strCategory}
                    </Link>
                ))}
            </Menu>
        </ContainerMenu>
        </Wrapper>
    )
}

export default Header;