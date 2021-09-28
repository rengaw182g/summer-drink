import React from 'react';
import ContextDrink from "./Context";

const Provider:React.FC = ({ children }) => {
    return (
        <ContextDrink.Provider value={{idDrink:"1",strDrink:"teste"}}>
            {children}
        </ContextDrink.Provider>
    )
}

export default Provider;