import {createContext} from 'react'

export const CarritoContext = createContext();

const CarritoProveedor = ({children}) => {

    // Se pueden guardar: funciones,variables,estados,etc

    let nombre = "Ale"

    return (
        <CarritoContext.Provider value={{nombre}}>
            {children}
        </CarritoContext.Provider>
    )
}

export default CarritoProveedor