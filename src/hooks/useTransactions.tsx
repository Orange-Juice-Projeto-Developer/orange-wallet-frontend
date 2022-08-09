import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Transaction {
	type: string,
	value: number
}

interface TransactionsProviderProps {
	children: ReactNode
}

interface TransactionContextData {
	transactions: Transaction[]
	isVisible: boolean,
	setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const TransactionsContext = createContext({} as TransactionContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
	const [transactions, setTransactions] = useState<Transaction[]>([]);
	const [isVisible, setIsVisible] = useState<boolean>(true);

	useEffect(() => {
		api.get("/listTransaction").then(res => setTransactions(res.data));
	}, []);

	return (
		<TransactionsContext.Provider value={{ transactions, isVisible, setIsVisible }}>
			{children}
		</TransactionsContext.Provider>
	);
}

export function useTransaction() {
	const context = useContext(TransactionsContext);
	return context;
}