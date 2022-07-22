import React from "react";
import despesaIcon from "../../assets/images/despesas-icon.png";
import eyeIcon from "../../assets/images/eye-icon.svg";

function DespesaTotal() {
	return (
		<div className="bg-gray-300 flex flex-col lg:items-start lg:justify-between font-roboto rounded-lg w-[50%] lg:w-[305px] lg:h-[148px] px-2 py-4 lg:p-4">
			<div className="flex justify-between items-center lg:container">
				<div className="flex flex-col">
					<span className="text-gray-50 text-xs lg:mb-4">Despesa</span>
					<div className="flex">
						<div>
							<span className="text-red-100 text-xs">R$ </span>
							<span className="text-lg text-red-100 mr-3">655,00</span>
						</div>
					</div>
				</div>
				<img className="w-[30px] h-[30px]" src={despesaIcon} alt="Seta para cima verde" />
			</div>
			<span className="hidden lg:block text-gray-100">Última movimentação: 06/07/2022</span>
		</div>
	);
}

export default DespesaTotal;