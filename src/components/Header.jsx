import React from 'react';
import '../css/Header.css'; 

const Header = () => {
  return (
    <header className="netflix-header">
      <div className="logo">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
          alt="Netflix Logo" 
        />
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#series">Series</a></li>
          <li><a href="#movies">Movies</a></li>
          <li><a href="#new">New & Popular</a></li>
          <li><a href="#mylist">My List</a></li>
        </ul>
      </nav>
      <div className="user-actions">
        <input 
          type="text" 
          className="search-bar" 
          placeholder="Search..." 
        />
        <img 
          className="user-avatar" 
          src="https://via.placeholder.com/40" 
          alt="User Avatar" 
        />
      </div>
    </header>
  );
};

export default Header;