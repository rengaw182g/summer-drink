import styled from 'styled-components';

export const Title = styled.h1`
    display:flex;
    justify-content:center;
    align-items: center;
    font-size: 2rem;
    font-weight: 600;
    margin:0px 0px 5px 0px;
    color:var(--green);     
`;
export const Subtitle = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    font-size:1rem;
    font-weight: 300;
    color:var(--gray);     
`;

export const Wrapper = styled.div`
    max-width:1280px;
    margin: 0px auto;
    padding:0px 10px 10px;
`;

export const ContainerFeature = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 25px 0px;
`;

export const Form = styled.form`
    margin:20px 0px 0px 0px;
    width: 450px;
    display: flex;
    justify-content:center;
    align-items:center;

    input{ 
        flex:1;
        height:45px;
        border: 1px solid var(--green);
        border-radius:25px 0px 0px 25px;
        padding:10px 10px;
        font-weight: 400;
        font-size:1.2rem;
        &::placeholder{
            color: #ccc;
        }
    }
    button{ 
        display: flex;
        justify-content:center;
        align-items: center;
        width:60px;
        height:45px;
        border: 1px solid var(--gray);
        border: none;
        padding:10px 10px;
        background:var(--green);
        color: var(--white);
        transition: background-color 0.3s;
        border-radius:0px 25px 25px 0px;
        &:hover{
            background:var(--green);
        }
    }
`;

export const Drinks = styled.div`
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:flex-start;

    a{        
        background:var(--white);
        padding:0px;
        border-radius:10px;
        width:220px;
        backdrop-filter: blur(4px);
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        transition: all 0.3s ease-in-out;
        margin:15px;
        color: var(--green);
        box-shadow:0px 0px 10px rgba(0,0,0,0.1);
        
        img{           
            width:100%;
            border-radius: 10px 10px 0px 0px;
        }

        div{
            padding: 15px;
            font-weight: 300;
            font-size: 0.8rem;
            color: var(--green);
            text-transform: capitalize;
        }

        &:hover{
            box-shadow:0px 10px 20px rgba(0,0,0,0.2);
        }
    }
`;

export const Alert = styled.div`
    font-size: 1rem;
    color: var(--gray);
    padding: 15px;
    border-radius: 10px;
    border:1px solid var(--gray);
`;