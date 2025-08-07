import React, { createContext, useEffect, useState } from 'react'
import { productsDummyData } from '../assets/assets';
export const AppContext = createContext();

AppContext.displayName = "AppContext";
const AppContextProvider = ({ children }) => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        setAllProducts(productsDummyData);
    }, [])
    const value = {
        allProducts,
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContextProvider;