import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <h1 id="bold">contato</h1>
        <div className="footer-contato">
          <h2 id="regular">reserva@pretocozinha.com</h2>
          <h2 id="regular">·</h2>
          <h2 id="regular">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/preto.cozinha/"
            >
              @preto.cozinha
            </a>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Footer;
