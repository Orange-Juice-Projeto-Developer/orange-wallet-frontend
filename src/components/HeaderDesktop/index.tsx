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

export function HeaderDesktop() {
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
		<header className="hidden sm:desktop bg-gradient-to-b from-[rgba(19,19,19,0.4126)] to-[#323131] rounded-b-[30px] pb-7 font-roboto">
			<div className="flex justify-between items-center px-16 pt-16 pb-8">
				<div>
					<p className="text-base text-gray-50">
						Ola, <span className="text-2xl text-gray-50">Theodoro</span>
					</p>
				</div>
				<div className="flex">
					<button className="mr-5" onClick={() => setIsVisible(!isVisible)}>
						<img src={isVisible ? eyeSlashIcon : eyeIcon} />
					</button>
					<img
						className="mr-4 w-6"
						src={bellIcon}
						alt="Ícone de notificações"
					/>
					<img src={imagePerfil} alt="Foto de perfil" />
				</div>
			</div>
			<div className="flex gap-6 items-center justify-center px-4">
				<IncomeTotal isVisible={isVisible} income={values.incomes} />
				<div className="bg-gray-300 rounded-lg my-7 px-4 py-4 flex justify-between max-w-[26rem] h-[151px] shadow-md">
					<div className="flex flex-col">
						<span className=" text-gray-50 text-base mb-3">
							Seu saldo atual é de
						</span>
						<div className="flex justify-between items-center w-[400px]">
							<div className="flex">
								<span className="text-[2rem] text-gray-50">
									{isVisible ? (new Intl.NumberFormat("pt-br", {
										style: "currency",
										currency: "BRL",
									}).format(values.total)) : "R$ *****"}
								</span>
							</div>
							<img
								src={dolarIcon}
								alt="Ícone de dolar"
								className="h-[4.08rem] mr-2"
							/>
						</div>
					</div>
				</div>
				<OutcomeTotal isVisible={isVisible} outcome={values.outcome} />
			</div>
			<button className="flex justify-center items-center text-gray-600 text-lg font-bold bg-orange-500 rounded-3xl py-[14px] px-24 mx-auto w-[415px]">
				<img className="mr-2 w-[22px]" src={plusIcon} alt="icone de adição" />
				Cadastrar transação
			</button>
		</header>
	);
}
