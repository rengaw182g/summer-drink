import styled from 'styled-components';

export const Wrapper = styled.header`
    width: 100%;
    /* background:var(--white);     */
`;

export const Top = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    text-transform:uppercase;
    font-weight: 700;
    font-size: 1.4rem;
    color:var(--white);
    padding: 15px 0px;
    max-width:1280px;
    margin: 0px auto;
    padding:15px;

    a{
        text-decoration:none;
        color:var(--green);
        margin: 0px 0px 0px 0px;
        padding:0px 0px 0px 0px;
    }
`;

export const Category = styled.header`
    width: 100%;
    background:var(--green);   
`;

export const Menu = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content:space-between;
    align-items:center;
    max-width:1280px;
    margin: 0px auto;
    background:var(--green);
       
        a{            
            padding:5px;
            border:1px solid var(--green);
            text-transform:uppercase;
            font-size:0.8rem;
            font-weight: 500;
            color:var(--white);
            text-decoration:none;
            margin:10px 5px;
            transition:all 0.3s ease-in-out;

            &:hover{                
                border:1px solid var(--white);
            }
        }

`;