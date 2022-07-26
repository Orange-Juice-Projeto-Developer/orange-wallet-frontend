import React from "react";
import { TransactionsProvider } from "./hooks/useTransactions";
import Home from "./pages/Home";

function App() {
	return (
		<TransactionsProvider>
			<Home />
		</TransactionsProvider>
	);
}
export default App;
