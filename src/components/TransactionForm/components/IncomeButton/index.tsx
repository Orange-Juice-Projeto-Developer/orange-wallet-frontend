import React from "react";
import upArrowBlack from "../../../../assets/images/uparrow.svg";
import upArrowWhite from "../../../../assets/images/up-arrow-white.svg";

interface IncomeButtonProps {
	active: boolean;
	setActive: (isActive: boolean) => void;
}

export function IncomeButton({ active, setActive }: IncomeButtonProps) {
	return (
		<>
			<button
				type="button"
				onClick={() => setActive(!active)}
				className={`flex justify-center items-center w-[216px] h-[42px] ${active ? "bg-green-400 rounded-[18px] text-gray-600" : "text-[#FFF]"} `}
			>
				<img className="mr-[10px]" src={active ? upArrowBlack : upArrowWhite} alt="Seta para cima" />
				Receita
			</button>
		</>
	);
}
