import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom:15px;
`;

export const Form = styled.form`
    margin: 20px 0px;
    max-width: 360px;
    display: flex;

    input{ 
        flex:1;
        border: 2px solid var(--black);
        border-radius:4px 0px 0px 4px;
        padding:6px 10px;
        font-weight: 300;
        font-size: 1rem;
        &::placeholder{
            color: #a8a8a8;
        }
    }

    button{ 
        width: 80px;
        padding: 6px;
        border: 2px solid var(--black);
        background:var(--black);
        color: var(--white);
        transition: background-color 0.3s;
        border-radius: 0px 4px 4px 0px;

        &:hover{
            background:var(--black);
        }
    }
`;

export const Drinks = styled.div`
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:flex-start;

    a{
        border-radius: 6px;
        background:var(--white);
        padding:15px;
        width:210px;
        backdrop-filter: blur(4px);
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        transition: all 0.3s ease-in-out;
        border:1px solid var(--bg);
        margin:0px 15px 15px 0px;
        img{
            border-radius: 6px; 
            margin-bottom:10px;
            width:100%;
        }

        strong{
            font-size: 1rem;
            font-weight: 400;
            color: var(--black);
            text-transform: uppercase;
        }

        &:hover{
            box-shadow:0px 10px 20px rgba(0,0,0,0.1);
        }
    }
`;

export const Alert = styled.div`
    font-size: 1rem;
`;