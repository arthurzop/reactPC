import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import fachada from "../../assets/fachada.jpg";
import comida from "../../assets/comida.jpg";
import ambiente from "../../assets/ambiente.jpg";
import "./home.css";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="home-container">
        <div className="home-banner">
          <img className="banner-img" src={ambiente} />
          <div className="slogan-div">
            <h1 id="light">
              "um lugar aberto <br />
              para o <span id="extrabold">novo</span> <br />
              sem se esquecer <br />
              do <span id="extrabold">passado</span>."
            </h1>
          </div>
        </div>
        <div className="home-top">
          <div className="horarios">
            <img src={comida} />
            <h1>horarios</h1>
            <h3>SEG, QUA E QUI - 12h às 23h</h3>
            <h3>SEXTA E SÁBADO - 12h às 01h</h3>
            <h3>DOMINGO - 12h às 18h</h3>
            <h3>TERÇA-FEIRA - FECHADO</h3>
          </div>
          <div className="sobre">
            <h1>sobre nós</h1>
            <div className="linha"></div>
            <h3>
              O Preto Cozinha é um projeto de Rodrigo Freire, e temos a
              sustentabilidade e a baianidade nagô como nossos pilares. Abrimos
              as portas para uma culinária que mistura os sabores da África e
              Portugal, mas sempre com o nosso sotaque baiano. Vimos uma
              oportunidade de oferecer ao coração de São Paulo nossos sabores
              favoritos, em uma comida vibrante para ser apreciada sem pressa.
              Na nossa casa, a famosa “loucura paulistana” fica do lado de fora.
            </h3>
          </div>
        </div>
        <div className="linha"></div>
        <h1>endereço</h1>
        <div className="home-bot">
          <h1>Rua Fradique Coutinho, 276 Pinheiros, São Paulo - SP</h1>
          <img src={fachada} />
        </div>
      </div>
      <Footer />
    </>
  );
};
