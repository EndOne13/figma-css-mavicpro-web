import React from 'react';


import facebook from "../../assets/images/facebook.svg";
import youtube from "../../assets/images/youtube.svg";
import instagram from "../../assets/images/instagram.svg";

function Six(props) {
    return (
        <div>
            <section id='contacts' className="page-section contacts">
                <div className='page-section__wrapper'>
                    <div className="container">
                        <h3 className="title">Контакты</h3>
                        <div className="contacts__inner">
                            <div className="contacts__info">

                                <div className="contacts__info-box">
                                    <p className="contacts__info-title">Киев</p>
                                    <a className='contacts__info-phone' href="tel:+80505676767">+8 (050) 567– 67– 67 </a>
                                    <a className='contacts__info-email' href="mailto:dgi.mavic2pro.kiev@mail.ru">dgi.mavic2pro.kiev@mail.ru</a>
                                </div>

                                <div className="contacts__info-box">
                                    <p className="contacts__info-title">Москва</p>
                                    <a className='contacts__info-phone' href="tel:+74995676767">+7 (499) 567– 67 – 67 </a>
                                    <a className='contacts__info-email' href="mailto:dgi.mavic2pro.kiev@mail.ru">dgi.mavic2pro.moscow@mail.ru</a>
                                </div>

                                <div className="contacts__info-box">
                                    <p className="contacts__info-title">Минск</p>
                                    <a className='contacts__info-phone' href="tel:+375175676767">+3 (7517) 567– 67 – 67 </a>
                                    <a className='contacts__info-email' href="mailto:dgi.mavic2pro.kiev@mail.ru">dgi.mavic2pro.minsk@mail.ru</a>
                                </div>

                            </div>
                            <div className="contacts__form">
                                <form>
                                    <h4 className="contacts__form-title">Остались вопросы? </h4>
                                    <p className="contacts__form-text">Мы обязательно свяжемся с вами в течение двух рабочих дней</p>
                                    <div className="contacts__form-line">
                                        <input className='contacts__form-input'  placeholder='Ваше имя' type="text"/>
                                        <input className='contacts__form-input'  placeholder='Ваш email' type="text"/>
                                    </div>
                                    <textarea className='contacts__form-textarea' placeholder='Что вас интересует?'></textarea>
                                    <button className='contacts__form-btn' type='submit'>ОТПРАВИТЬ</button>
                                </form>
                            </div>
                            <ul className="contacts__social-list">
                                <li className="contacts__social-item">
                                    <a href="#!" className="contacts__social-link">
                                        <img src={facebook} alt=""/>
                                    </a>
                                </li>
                                <li className="contacts__social-item">
                                    <a href="#!" className="contacts__social-link">
                                        <img src={youtube} alt=""/>
                                    </a>
                                </li>
                                <li className="contacts__social-item">
                                    <a href="#!" className="contacts__social-link">
                                        <img src={instagram} alt=""/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <footer className="footer">
                        <div className="container">
                            <p className="footer__copy">
                                © DJI, 2020
                            </p>
                        </div>
                    </footer>
                </div>
            </section>
        </div>
    );
}

export default Six;