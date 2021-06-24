// NOTE: Using Context API as a substitute to Redux
// Context API prompts a re-render on each update of the state and re-renders all components regardless. 
// Redux however, only re-renders the updated components.
// Context is better suited for smaller applications where state changes are minimal
// Redux is better used for large-scale apps where there are high-frequency updates

import React, {useReducer, createContext} from 'react';

const initialState = [];
export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({children}) => {
    return (
        <ExpenseTrackerContext.Provider value={{ appName: 'Expense Tracker'}}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
        
}