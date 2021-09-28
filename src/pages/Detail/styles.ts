import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    max-width:1280px;
    margin:40px auto;
    height:66vh;
    div{
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        align-items:space-between;

        section{
            flex:1;
            display: flex;
            flex-direction: column;
            justify-content:flex-start;
            align-items:flex-start;
                img{
                    border-radius: 10px;
                    margin-right: 80px;
                    width:460px;
                    height:auto;
                    flex:1;
                }
                h1{
                    font-weight: 800;
                    font-size: 3rem;
                    margin:20px 0px;
                    color:var(--green);
                }
                h2{
                    font-weight: 600;
                    font-size: 1.6rem;
                    margin:10px 0px;
                    color:var(--green);
                }
                p{
                    margin:0px;
                    flex:1;
                    font-size:1rem;
                    color: var(--gray);                    
                }
                ul{
                    list-style-type:decimal;
                    li{
                        color:var(--gray);
                        font-size:0.8rem;
                    }
                }
                
        }     
     }

`;