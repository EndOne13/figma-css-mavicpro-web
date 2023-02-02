import React from 'react';
import Header from "../../components/Header/Header";

import arrow from '../../assets/images/arrow-down.png'
import mavic from '../../assets/images/dron.png'
import facebook from '../../assets/images/facebook.svg'
import youtube from '../../assets/images/youtube.svg'
import instagram from '../../assets/images/instagram.svg'

function One(props) {
    return (
        <div>
            <Header/>
            <section className="page-section top">
                <div className="y top__wrapper">
                    <div className="container">
                        <div className="top__inner">
                            <h1 className="top__title">Mavic 2 Pro</h1>
                            <img src={mavic} alt=""/>
                            <p className="top__text">
                                Квадрокоптер Dji Mavic 2 Pro
                                с профессиональной камерой Hasselblad
                            </p>
                            <ul className="top__social-list">
                                <li className="top__social-item">
                                    <a href="#!" className="top__social-link">
                                        <img src={facebook} alt=""/>
                                    </a>
                                </li>
                                <li className="top__social-item">
                                    <a href="#!" className="top__social-link">
                                        <img src={youtube} alt=""/>
                                    </a>
                                </li>
                                <li className="top__social-item">
                                    <a href="#!" className="top__social-link">
                                        <img src={instagram} alt=""/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="scroll__btn">
                            <a href="#products">
                                <img src={arrow} alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default One;