import React from 'react'
import '../css/Home.css';

const Home = () => {
  return (
    <div className="the-all">
      <div className="center">
        <div className="first-msg">
        <h1>Sınırsız film, dizi ve çok <br></br>daha fazlası</h1><br></br>
        <h3>149,99 TL ile başlayan fiyatlarla. İstediğiniz zaman iptal edebilirsiniz.</h3>
        <p>İzlemeye hazır mısınız? Üye olmak ya da hesabınıza tekrar ulaşmak için tek yapmanız gereken e-posta adresinizi girmek.
        </p>
        <div className="go-enter">
        <input 
          type="text" 
          className="search-bar-home" 
          placeholder="E-Posta Adresi" 
        />
        <button
        className="entr-btn">Başlayın <i class="fa-solid fa-arrow-right"></i></button>
        </div>
        
        </div>
    </div>
    </div>
  )
}

export default Home
