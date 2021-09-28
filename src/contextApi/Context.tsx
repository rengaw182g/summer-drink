import { createContext } from 'react';

interface Drink{
    idDrink: string,
    strDrink: string,
}
const ContextDrink = createContext({
    idDrink: "",
    strDrink: ""
})

export default ContextDrink;