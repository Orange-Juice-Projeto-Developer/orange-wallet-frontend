import React from "react";

interface TransactionItemProps {
  title: string;
  date: string;
  value: number;
  type: "Despesa" | "Receita";
}

export function Transaction({
	title,
	date,
	type,
	value,
}: TransactionItemProps) {
	return (
		<section className="text-base text-gray-50 bg-gray-300 p-4 flex gap-3 m-2 rounded-2xl items-center">
			<img
				src="https://i.postimg.cc/fRGvm6qq/Property-1-Salario.png"
				alt=""
				className="h-8 w-8"
			/>
			<div className="flex justify-between w-full items-center">
				<div>
					<p className="font-bold">{title}</p>
					<p>
						{new Intl.DateTimeFormat("pt-BR", {
							dateStyle: "long",
						}).format(new Date(date))}
					</p>
				</div>
				<span
					className={`${
						type === "Despesa" ? "text-red-100" : "text-green-100"
					} font-bold`}
				>
					{type === "Despesa" ? "- " : "+ "}
					{new Intl.NumberFormat("pt-BR", {
						style: "currency",
						currency: "BRL",
					}).format(value)}
				</span>
			</div>
		</section>
	);
}
