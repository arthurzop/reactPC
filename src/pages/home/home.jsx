import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Slide from "../../components/slide";
import fachada from "../../assets/fachada.jpg";
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
          <Slide />
          <div className="sobre">
            <h1 id="extrabold">sobre nós</h1>
            <div className="linha"></div>
            <h3 id="regular">
              O <span id="extrabold">Preto Cozinha</span> é um projeto de
              Rodrigo Freire, e temos a<span id="medium">sustentabilidade</span>
              e a <span id="medium">baianidade nagô</span>como nossos pilares.
              Abrimos as portas para uma culinária que mistura os sabores da
              <span id="medium">África</span> e<span id="medium">Portugal</span>
              , mas sempre com o nosso sotaque baiano. Vimos uma oportunidade de
              oferecer ao coração de São Paulo nossos sabores favoritos, em uma
              comida
              <span id="medium">vibrante</span> para ser apreciada sem pressa.
              Na nossa casa, a famosa “loucura paulistana” fica do lado de fora.
            </h3>
          </div>
        </div>
        <hr className="linha" />
        <h1 className="endereco" id="extrabold">
          endereço
        </h1>

        <div className="home-bot">
          <h1>Rua Fradique Coutinho, 276 Pinheiros, São Paulo - SP</h1>
          <img src={fachada} />
        </div>
      </div>
      <Footer />
    </>
  );
};
