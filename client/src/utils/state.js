import { props } from "bluebird";
import React, { createContext, useContext } from "react";
import { useTransactionReducer } from './reducers';

const transactions = createContext();
const { Provider } = transactions;

const StoreTransaction = ({ value = [], ...props }) => {
    const [state, dispatch] = useTransactionReducer({
        amount: [],
        date: [],
        
    });

    return <Provider value={[state, dispatch]} {...props} />;
};

const useTransactionContext = () => {
    return useContext (transactions);
};

export { StoreTransaction, useTransactionContext };