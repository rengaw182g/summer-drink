import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;600;700&display=swap');

*{
    margin:0px;
    padding:0px;
    box-sizing:border-box;
    font-family: Oswald,'sans-serif';    
    outline:none;
}

:root {
    --bg:#efefef;
    --white:#fff;
    --black:#000;
    --gray:#666;
    --green:#6bd29c;
}

body, input, button {
    background: var(--white);
    --webkit-font-smoothing: antialiased;
}

button{ 
    cursor: pointer;
    text-transform:uppercase;
}

#root{
    max-width:960px;
    margin: 0px auto;
    padding:15px;
}

`;