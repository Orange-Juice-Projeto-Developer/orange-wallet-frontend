import React from "react";
import imagePerfil from "../../assets/images/perfil.png";
import sinoIcon from "../../assets/images/sino.svg";
import eyeIcon from "../../assets/images/bi_eye-slash.svg";
import dolarIcon from "../../assets/images/dolar.svg";
import plusIcon from "../../assets/images/icon-button-plus.svg";
import ReceitaTotal from "../ReceitaTotal";
import DespesaTotal from "../DespesaTotal";

export function HeaderMobile() {
	return (
		<header className="bg-gradient-to-b from-[rgba(19,19,19,0.4126)] to-[#323131] rounded-b-[30px] pb-[26px] font-roboto sm:mobile ">
			<div className="flex justify-between px-4 pt-[26px]">
				<div>
					<span className="text-base text-white">Ola,</span>
					<br/>
					<span className="text-2xl text-white">Theodoro</span>
				</div>
				<div>
					<img className="inline mr-4" src={sinoIcon} alt="Ícone de notificações" />
					<img className="inline" src={imagePerfil} alt="Foto de perfil" />
				</div>
			</div>
			<div className="bg-gray rounded-lg mx-3 my-7 px-2 py-4 flex justify-between items-end">
				<div>
					<span className="block text-white text-sm mb-3">Seu saldo atual é de</span>
					<span className="text-2xl text-white">R$ 8.050,00</span>
					<img className="inline ml-4 mb-[5px]" src={eyeIcon} alt="Ícone de olho cortado" />
				</div>
				<img src={dolarIcon} alt="Ícone de dolar" />
			</div>
			<div className="flex gap-1 justify-center mx-3 my-6">
				<ReceitaTotal />
				<DespesaTotal />
			</div>
			<button className="text-black text-base font-bold bg-orange rounded-3xl py-[14px] px-24 mx-auto flex items-center">
				<img className="inline mr-2" src={plusIcon} alt="" />
				Cadastrar transação
			</button>
		</header>
	);
}