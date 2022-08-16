import React, { useEffect, useState } from "react";
import upArrow from "../../assets/images/uparrow.svg";
import downArrow from "../../assets/images/downarrow.svg";

export function TransactionForm() {
	const [category, setCategory] = useState<string>();
	const [transaction, setTransaction] = useState<string>();
	const [value, setValue] = useState<number>();
	const [date, setDate] = useState<string>("");

	return (
		<>
			<form className="w-[569px] h-[741px] bg-gradient-to-t from-[#2F2F2F] to-gray-700 rounded-[39px] flex flex-col font-roboto text-gray-50 px-10 pt-[34px] pb-12">
				<div className="flex justify-end">
					<button type="button" className="text-xl">X</button>
				</div>
				<span className="text-3xl mb-[46px]">Cadastrar transação</span>
				<div className="flex justify-center mb-[42px]">
					<button
						type="button"
						className="flex justify-center items-center w-[216px] h-[42px] bg-green-400 rounded-[18px] text-gray-600"
					>
						<img className="mr-[10px]" src={upArrow} alt="" />
						Receita
					</button>
					<button
						type="button"
						className="flex justify-center items-center text-[#FFF] w-[216px] h-[42px] rounded-[18px]"
					>
						<img className="mr-[10px]" src={downArrow} alt="" />
						Despesa
					</button>
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
						value={category}
						onChange={(e) => setCategory(e.target.value)}
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
						value={transaction}
						onChange={(e) => setTransaction(e.target.value)}
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
							value={value}
							required
							onChange={(e) => setValue(Number(e.target.value))}
							className="text-[#404040] block w-[257px] h-[60px] text-[#404040] p-4 rounded-[10px]"
						/>
					</div>
					<div>
						<label htmlFor="date" className="text-[21px]">Data</label>
						<input
							type="date"
							id="date"
							required
							value={date}
							onChange={e => setDate(e.target.value)}
							className="text-[#404040] block h-[60px] text-[#404040] p-4 rounded-[10px]"
						/>
					</div>
				</div>

				<button type="submit" className="text-2xl leading-7 font-bold text-gray-600 bg-orange-500 rounded-[27px] w-[415px] h-[60px] mx-auto">Cadastrar</button>
			</form>
		</>
	);
}
