import React from 'react';


import logo from '../../assets/images/logo-all.png'
import mobile from '../../assets/images/logo-mobile.png'

function Header(props) {
    return (
            <div className="header">
                <div className="container">
                    <div className="header__inner">
                        <a href="#!" className="logo">
                            <picture className='logo__img'>
                                <source srcSet={mobile} media='(max-width: 600px)'/>
                                <img src={logo} alt=""/>
                            </picture>
                        </a>
                        <nav className="menu">
                            <ul className="menu__list">
                                <li className="menu__list-item">
                                    <a href="#!" className="menu__list-link">О ДРОНЕ</a>
                                </li>
                                <li className="menu__list-item">
                                    <a href="#!" className="menu__list-link">ПРЕИМУЩЕСТВА</a>
                                </li>
                                <li className="menu__list-item">
                                    <a href="#!" className="menu__list-link">ХАРАКТЕРИСТИКИ</a>
                                </li>
                                <li className="menu__list-item">
                                    <a href="#!" className="menu__list-link">ВОПРОСЫ</a>
                                </li>
                                <li className="menu__list-item">
                                    <a href="#!" className="menu__list-link">КОНТАКТЫ</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="header__info">
                            <button className='header__btn'>Купить</button>
                            <a href="tel:80505676767" className="header__phone">8 (050) 567 67 67</a>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Header;