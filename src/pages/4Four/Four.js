import React from 'react';

import arrow from "../../assets/images/arrow-down.png";
import dron from '../../assets/images/dron.png'


function Four(props) {
    return (
        <div>
            <section id='specification' className="page-section specification">
                <div className='page-section__wrapper'>
                    <div className="container">
                        <h3 className="title specification__title">Характеристики</h3>
                        <div className="specification__inner">
                            <div className="specification__item">
                                <div className="specification__box specification__box-1">
                                    <h4 className="specification__box-title">Dlog-M 10 бит</h4>
                                    <p className="specification__box-text">
                                        Mavic 2 Pro поддерживает цветовой профиль Dlog-M
                                        10 бит с более широким динамическим диапазоном, дающим больше возможностей для
                                        цветокоррекции.
                                    </p>
                                </div>
                                <div className="specification__box specification__box-2">
                                    <h4 className="specification__box-title">Камера Hasselblad</h4>
                                    <p className="specification__box-text">
                                        Камера Hasselblad L1D-20С
                                        известны эргономичным дизайном
                                        и превосходным качеством изображений.
                                    </p>
                                </div>
                            </div>
                            <div className="specification__item specification__item-center">
                                <img src={dron} alt=""/>
                            </div>
                            <div className="specification__item">
                                <div className="specification__box specification__box-3">
                                    <h4 className="specification__box-title">Матрица CMOS 1</h4>
                                    <p className="specification__box-text">
                                        Зона активной работы новой 1-дюймовой матрицы
                                        CMOS в четыре раза превышает показатели Mavic Pro
                                    </p>
                                </div>
                                <div className="specification__box specification__box-4">
                                    <h4 className="specification__box-title">Видео HDR</h4>
                                    <p className="specification__box-text">
                                        Благодаря поддержке видео 4K HDR 10 бит, Mavic 2
                                        Pro можно подсоединить к совместимому с HLG 4K ТВ и просматривать запись в полном
                                        цветовом спектре
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="scroll__btn">
                        <a href="#questions">
                            <img src={arrow} alt=""/>
                        </a>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Four;