import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
        <nav className="navNo1">

        <ul>
          <li><a href="#home">الصفحة الرئيسية</a></li>
          <li><a href="#about">عن المنطقة</a></li>
          <li><a href="#contact">تواصل معنا</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
