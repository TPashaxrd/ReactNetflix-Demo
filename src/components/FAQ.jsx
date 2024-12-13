import React, { useState } from 'react';
import '../css/Faqs.css';

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Netflix nedir?",
      answer: "Netflix, farklı türlerde filmler, diziler ve belgeseller sunan bir yayın platformudur. İstediğiniz zaman, istediğiniz yerden izleyebilirsiniz."
    },
    {
      question: "Netflix'e nasıl abone olabilirim?",
      answer: "Netflix'e üye olmak için resmi web sitesine gidip, bir hesap oluşturmanız ve uygun bir plan seçmeniz yeterlidir."
    },
    {
      question: "Ücretlendirme nasıl çalışıyor?",
      answer: "Netflix farklı fiyatlandırma planları sunar. Planlar, içerik kalitesi ve aynı anda kaç cihazda izlenebileceğine bağlı olarak değişir."
    },
    {
      question: "Netflix içeriklerini nasıl izlerim?",
      answer: "Netflix içeriklerini, bilgisayarınız, tabletiniz, telefonunuz veya akıllı TV'niz üzerinden internet bağlantısıyla izleyebilirsiniz."
    },
    {
      question: "İnternet olmadan içerik izleyebilir miyim?",
      answer: "Evet, Netflix uygulamasından içerik indirerek, internet bağlantınız olmadığında da izleyebilirsiniz."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqs-container">
      <h1 className="faqs-title">Sık Sorulan Sorular</h1>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
          onClick={() => toggleAccordion(index)}
        >
          <div className="faq-question">
            {faq.question}
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faqs;