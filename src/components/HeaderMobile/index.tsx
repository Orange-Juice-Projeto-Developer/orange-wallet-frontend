import React from "react";
import imagePerfil from "../../assets/images/perfil.png";
import bellIcon from "../../assets/images/sino.svg";
import eyeSlashIcon from "../../assets/images/bi_eye-slash.svg";
import eyeIcon from "../../assets/images/eye.svg";
import dolarIcon from "../../assets/images/dolar.svg";
import plusIcon from "../../assets/images/icon-button-plus.svg";
import { IncomeTotal } from "../IncomeTotal";
import { OutcomeTotal } from "../OutcomeTotal";
import { useTransaction } from "../../hooks/useTransactions";

export function HeaderMobile() {
	const { transactions, isVisible, setIsVisible } = useTransaction();

	const values = transactions.reduce(
		(acc, transaction) => {
			if (transaction.type === "Receita") {
				acc.incomes += transaction.value;
				acc.total += transaction.value;
			} else {
				acc.outcome += transaction.value;
				acc.total -= transaction.value;
			}
			return acc;
		},
		{
			outcome: 0,
			incomes: 0,
			total: 0,
		}
	);

	return (
		<header className="bg-gradient-to-b from-[rgba(19,19,19,0.4126)] to-[#323131] rounded-b-[30px] pb-[26px] font-roboto sm:mobile ">
			<div className="flex justify-between px-4 pt-[26px]">
				<div>
					<span className="text-base text-gray-50">Ola,</span>
					<br />
					<span className="text-2xl text-gray-50">Theodoro</span>
				</div>
				<div>
					<button className="mr-4" onClick={() => setIsVisible(!isVisible)}>
						<img
							className="inline"
							src={isVisible ? eyeSlashIcon : eyeIcon}
							alt="Ícone de olho cortado"
						/>
					</button>
					<img
						className="inline mr-4"
						src={bellIcon}
						alt="Ícone de notificações"
					/>
					<img className="inline" src={imagePerfil} alt="Foto de perfil" />
				</div>
			</div>
			<div className="bg-gray-300 rounded-lg mx-3 my-7 px-2 py-4 flex justify-between items-end">
				<div>
					<span className="block text-gray-50 text-sm mb-3">
						Seu saldo atual é de
					</span>
					<span className="text-2xl text-gray-50">
						{isVisible ? new Intl.NumberFormat("pt-br", {
							style: "currency",
							currency: "BRL",
						}).format(values.total) : "R$ *****"}
					</span>
				</div>
				<img src={dolarIcon} alt="Ícone de dolar" />
			</div>
			<div className="flex gap-1 justify-center mx-3 my-6">
				<IncomeTotal isVisible={isVisible} income={values.incomes} />
				<OutcomeTotal isVisible={isVisible} outcome={values.outcome} />
			</div>
			<button className="text-gray-600 text-base font-bold bg-orange-500 rounded-3xl py-[14px] px-24 mx-auto flex items-center">
				<img className="inline mr-2" src={plusIcon} alt="" />
				Cadastrar transação
			</button>
		</header>
	);
}
