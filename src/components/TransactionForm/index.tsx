import React, { useReducer, useState } from "react";
import { IncomeButton } from "./components/IncomeButton";
import { OutcomeButton } from "./components/OutcomeButton";

interface IFormValues {
	category: string;
	transaction: string;
	value: number;
	date: string;
}

export function TransactionForm() {
	const [formValues, setFormValues] = useState<IFormValues>({
		category: "",
		date: "",
		transaction: "",
		value: 0
	});
	const [isActive, setIsActive] = useReducer((isActive: boolean) => !isActive, false);

	return (
		<div className="w-full h-full bg-[#00000080] absolute z-50 top-0">
			<form
				onSubmit={e => {
					e.preventDefault();
				}} 
				className="w-[569px] h-[741px] bg-gradient-to-t from-[#2F2F2F] to-gray-700 rounded-[39px] flex flex-col font-roboto text-gray-50 px-10 pt-[34px] pb-12 absolute top-[10%] left-[calc(50%-569px/2)]"
			>
				<div className="flex justify-end">
					<button type="button" className="text-xl">X</button>
				</div>
				<span className="text-3xl mb-[46px]">Cadastrar transação</span>
				<div className="flex justify-center mb-[42px] gap-[10px]">
					<IncomeButton active={!isActive} setActive={setIsActive} />
					<OutcomeButton active={isActive} setActive={setIsActive} />
				</div>
				<div className="mb-[40px]">
					<label htmlFor="categoria" className="text-[21px]">
						Categoria
					</label>
					<input
						type="text"
						id="categoria"
						required
						list=""
						value={formValues.category}
						onChange={(e) => setFormValues({ ...formValues, category: e.target.value })}
						placeholder="Selecione a categoria"
						className="w-[488px] h-[60] text-[#404040] p-4 rounded-[10px]"
					/>
				</div>
				<div className="mb-[35px]">
					<label htmlFor="transacao" className="text-[21px]">
						Transação
					</label>
					<input
						type="text"
						id="transacao"
						required
						value={formValues.transaction}
						onChange={(e) => setFormValues({ ...formValues, transaction: e.target.value })}
						placeholder="Escreva aqui o título da sua transação"
						className="w-[488px] h-[60] text-[#404040] p-4 rounded-[10px]"
					/>
				</div>

				<div className="flex justify-between mb-10">
					<div>
						<label htmlFor="valor" className="text-[21px]">Valor</label>
						<input
							type="number"
							id="valor"
							value={formValues.value}
							required
							onChange={(e) => setFormValues({ ...formValues, value: Number(e.target.value)})}
							className="text-[#404040] block w-[257px] h-[60px] text-[#404040] p-4 rounded-[10px]"
						/>
					</div>
					<div>
						<label htmlFor="date" className="text-[21px]">Data</label>
						<input
							type="date"
							id="date"
							required
							value={formValues.date}
							onChange={e => setFormValues({ ...formValues, date: e.target.value })}
							className="text-[#404040] block h-[60px] text-[#404040] p-4 rounded-[10px]"
						/>
					</div>
				</div>

				<button type="submit" className="text-2xl leading-7 font-bold text-gray-600 bg-orange-500 rounded-[27px] w-[415px] h-[60px] mx-auto">Cadastrar</button>
			</form>
		</div>
	);
}
