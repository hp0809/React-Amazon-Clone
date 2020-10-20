import React, { createContext, useContext, useReducer } from 'react';

//prepared the dataLayer
export const StateContext = createContext();

//Wrap our app provide the data layer for the app
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//pull information from the data layer
export const useStateValue = () => useContext(StateContext);
