import styled from 'styled-components';

export const Wrapper = styled.footer`
    border-top:3px solid var(--green);
    width: 100%;
    height: 100px;
    display:flex;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    background:var(--green);
`;

export const Container = styled.header`
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    align-items:flex-end;
    padding:40px 0px;
    font-size: 1rem;
    font-weight:400;
    text-transform:uppercase;
    color:var(--white);
    max-width:1280px;
    margin: 0px auto;
`;

