import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-top-text">Sorularınız mı var? Siktirin Gidin.</p>
        <ul className="footer-links">
          <li><a href="#help">Yardım Merkezi</a></li>
          <li><a href="#terms">Kullanım Koşulları</a></li>
          <li><a href="#privacy">Gizlilik</a></li>
          <li><a href="#corporate">Kurumsal Bilgiler</a></li>
          <li><a href="#contact">İletişim</a></li>
        </ul>
        <div className="footer-social">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-youtube"></i>
        </div>
        <p className="footer-bottom-text">© 2024 Netflix Yarramı Yesin Exxen Better Amk</p>
      </div>
    </footer>
  );
};

export default Footer;