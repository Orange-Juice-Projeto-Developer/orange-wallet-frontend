import React from "react";
import { TransactionsList } from "./components/TransactionsList";

function App() {
	return (
		<main className="h-screen flex flex-col gap-4">
			<TransactionsList />
		</main>
	);
}

export default App;