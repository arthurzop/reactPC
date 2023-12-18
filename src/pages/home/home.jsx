import React, { useRef } from "react";
import "./home.css";

import Header from "../../components/header";
import Footer from "../../components/footer";
import Slide from "../../components/slide";
import fachada from "../../assets/fachada.jpg";
import ambiente from "../../assets/ambiente.jpg";
import link from "../../assets/link.png";


export const Home = () => {

  const endereco = useRef(null)
  
  return (
    <>
      <Header />
      <div className="home-container">
        <div className="home-banner">
          <img className="banner-img" src={ambiente} />
          <div className="slogan-div">
            <h1 id="light">
              "um lugar aberto para o <span id="extrabold">novo</span> <br />
              sem se esquecer do <span id="extrabold">passado</span>."
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
              Rodrigo Freire, e temos a{" "}
              <span id="medium">sustentabilidade</span> e a{" "}
              <span id="medium">baianidade nagô </span>como nossos pilares.
              Abrimos as portas para uma culinária que mistura os sabores da
              <span id="medium"> África</span> e
              <span id="medium"> Portugal</span>, mas sempre com o nosso sotaque
              baiano. Vimos uma oportunidade de oferecer ao coração de São Paulo
              nossos sabores favoritos, em uma comida
              <span id="medium"> vibrante</span> para ser apreciada sem pressa.
              Na nossa casa, a famosa “loucura paulistana” fica do lado de fora.
            </h3>
          </div>
        </div>
        <hr className="linha" />
        <h1 className="endereco" id="extrabold">
          endereço
        </h1>

        <div className="home-bot">
          <h1>
            Rua Fradique Coutinho, 276 Pinheiros <br />
            São Paulo - SP{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://maps.app.goo.gl/S3mSqLXWKFTaD8kX7"
            >
              <img src={link} id="link" />
            </a>
          </h1>
          {/* https://maps.app.goo.gl/S3mSqLXWKFTaD8kX7 */}
          <img src={fachada} />
        </div>
      </div>
      <Footer />
    </>
  );
};
