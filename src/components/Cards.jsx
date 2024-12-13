import React from 'react';
import '../css/Cards.css';

const Cards = () => {
    const films = [
        {
          id: 1,
          title: "Stranger Things",
          image: "https://resizing.flixster.com/0xxuABVVuzJrUT130WFHKE-irEg=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vNzUyMTFhOTktZTU4Ni00ODkyLWJlYjQtZTgxYTllZmU2OGM0LmpwZw==",
          description: "Hawkins kasabasında geçen doğaüstü bir macera.",
          rating: "8.7"
        },
        {
          id: 2,
          title: "The Witcher",
          image: "https://m.media-amazon.com/images/M/MV5BMTQ5MDU5MTktMDZkMy00NDU1LWIxM2UtODg5OGFiNmRhNDBjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
          description: "Rivialı Geralt'ın canavar avcısı olarak hikayesi.",
          rating: "8.3"
        },
        {
          id: 3,
          title: "Breaking Bad",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOcWkpWG_NRrU2M8-WB8EbEcJk7smhdrY1eO0ttKXm0bo2ooOEWxk3zBSbsFrSgSJh2OEKOQ",
          description: "Kimya öğretmeni Walter White'ın suç dünyasına inişi.",
          rating: "9.5"
        },
        {
          id: 4,
          title: "Money Heist",
          image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTl6sB37QlR5nczz7EdqIGnSJImVW559wDdC-nh8wRZAMe2IRdmfL-J6ZGJhDFR-x1sxjml",
          description: "Profesör liderliğindeki bir soygun planı.",
          rating: "8.2"
        },
        {
          id: 5,
          title: "Dark",
          image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS6ApenbR-AZkjJySI-VBzjMJYPWFoqUgCxfkGyvXpCru89imX7jzAdmaDSgEVOY4MIDnR_",
          description: "Zaman yolculuğu ve kasaba sırlarıyla dolu bir Alman dizisi.",
          rating: "8.8"
        }
      ];

      
  return (
    <>
    <h1 className="hashGundem">Gündemdekiler</h1><br></br><br></br><br></br>
    <div className="cards-container">
      {films.map((film) => (
        <div key={film.id} className="card">
          <img src={film.image} alt={film.title} className="card-image" />
          <h2 className="card-title">{film.title}</h2>
          <p className="card-description">{film.description}</p>
          <span className="card-rating">⭐ {film.rating}</span>
        </div>
      ))}
    </div>
    </>
  );
};

export default Cards;
