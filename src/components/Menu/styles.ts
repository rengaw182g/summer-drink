import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    margin-bottom:20px;
    padding: 10px;
       
        a{            
            padding:10px;
            text-transform:uppercase;
            border-radius:6px;
            border: 2px solid var(--black);
            font-size:0.7rem;
            font-weight: 400;
            color:var(--black);
            text-decoration:none;
            margin-right:10px;
        }

`;