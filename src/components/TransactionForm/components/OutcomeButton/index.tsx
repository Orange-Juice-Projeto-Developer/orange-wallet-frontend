import React from "react";
import downArrowWhite from "../../../../assets/images/downarrow.svg";
import downArrowBlack from "../../../../assets/images/down-arrow-black.svg";

interface OutcomeButtonProps {
	active: boolean;
	setActive: (isActive: boolean) => void;
}

export function OutcomeButton({ active, setActive }: OutcomeButtonProps) {
	return (
		<>
			<button
				type="button"
				onClick={() => setActive(!active)}
				className={`flex justify-center items-center ${active ? "bg-red-400 text-gray-600" : "text-[#FFF]"}  w-[216px] h-[42px] rounded-[18px]`}
			>
				<img className="mr-[10px]" src={active ? downArrowBlack : downArrowWhite} alt="Seta para baixo" />
				Despesa
			</button>
		</>
	);
}
