import React from "react";
import imagePerfil from "../../assets/images/perfil.png";
import sinoIcon from "../../assets/images/sino.svg";
import eyeIcon from "../../assets/images/bi_eye-slash.svg";
import dolarIcon from "../../assets/images/dolar.svg";
import plusIcon from "../../assets/images/icon-button-plus.svg";

export function HeaderDesktop() {
  return (
    <header className="hidden sm:desktop bg-gradient-to-b from-[rgba(19,19,19,0.4126)] to-[#323131] rounded-b-[30px] pb-7 font-roboto">
      <div className="flex justify-between items-center px-16 pt-16 pb-8">
        <div className="">
          <p className="text-base text-white">
            Ola, <span className="text-2xl text-white">Theodoro</span>
          </p>
        </div>
        <div className="flex">
          <img
            className="mr-4 w-6"
            src={sinoIcon}
            alt="Ícone de notificações"
          />
          <img src={imagePerfil} alt="Foto de perfil" />
        </div>
      </div>
      <div className="bg-gray rounded-lg mx-auto my-7 px-4 py-4 flex justify-between max-w-[26rem] h-[11.625rem]">
        <div className="flex flex-col justify-between">
          <span className=" text-white text-base mb-3">
            Seu saldo atual é de
          </span>
          <div className="flex flex-col">
            <div className="flex justify-between items-center w-[400px]">
              <div className="flex">
                <span className="text-[2rem] text-white">R$ 8.050,00</span>
                <img
                  className="ml-4"
                  src={eyeIcon}
                  alt="Ícone de olho cortado"
                />
              </div>
              <img
                src={dolarIcon}
                alt="Ícone de dolar"
                className="h-[4.08rem] mr-2"
              />
            </div>
            <p className="text-[#CBCBCB]">Última movimentação: 06/07/2022</p>
          </div>
        </div>
      </div>
      <button className="flex items-center text-black text-lg font-bold bg-orange rounded-3xl py-[14px] px-24 mx-auto w-[415px]">
        <img className="mr-2 w-[22px]" src={plusIcon} alt="icone de adição" />
        Cadastrar transação
      </button>
    </header>
  );
}
