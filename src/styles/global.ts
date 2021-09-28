import { createGlobalStyle } from 'styled-components';
import bg from '../assets/bg.png';
export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto&display=swap');

*{
    margin:0px;
    padding:0px;
    box-sizing:border-box;
    font-family: Roboto,'sans-serif';    
    outline:none;
}

:root {
    --bg:#f6f6f6;
    --white:#fff;
    --black:#000;
    --gray:#6f6f6f;
    --gold:#c49b4f;
    --green:#47a737;
    --green-strong:#1f572f;
}
body{
    background-image:url(${bg});
    background-repeat:repeat;    
}

body, input, button {
    --webkit-font-smoothing: antialiased;
}

button{ 
    cursor: pointer;
    text-transform:uppercase;
}
`;