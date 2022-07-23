import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Transaction } from "../Transaction";

interface Transaction {
  category: string;
  date: string;
  id: string;
  title: string;
  type: "Despesa" | "Receita";
  value: number;
}

export function TransactionsList() {
	const [transactions, setTransactions] = useState<Transaction[]>([]);

	async function handleList() {
		const response = await api.get("/listTransaction");
		setTransactions(response.data);
	}

	useEffect(() => {
		handleList();
	}, []);

	const transactionsList = transactions.map((transaction) => {
		return (
			<Transaction
				key={transaction.id}
				title={transaction.title}
				date={transaction.date}
				type={transaction.type}
				value={transaction.value}
			/>
		);
	});

	return (
		<section>
			<header className="flex justify-between px-3 pb-1 text-gray-50 items-center">
				<h2>Transações recentes</h2>
				<a href="#" className="text-xs">
          Ver todas
				</a>
			</header>

			<ul>{transactionsList}</ul>
		</section>
	);
}
