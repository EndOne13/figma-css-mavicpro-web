import React, {useRef} from 'react';


import arrow from "../../assets/images/arrow-down.png";
import slider from '../../assets/images/slider-1.jpg'



function Two(props) {

    const sliderRef = useRef()


    return (
        <div>
            <section id='products' className="page-section products">
               <div className='page-section__wrapper'>
                   <div className="container">
                       <h3 className="title products__title">Что такое Mavic 2 Pro?</h3>
                       <div className="products__inner">
                           <div className="products__text">
                               <p>
                                   Дрон Mavic 2 Pro - это инженерное чудо, идеальное для аэросъемки. Дрон обладает всеми
                                   лучшими технологиями DJI, он преобразит мир аэросъемки.
                               </p>
                               <p>
                                   Mavic 2 Pro оснащен совершенно новой камерой Hasselblad L1D-20c. Камера L1D-20c работает
                                   по уникальной технологии Hasselblad Natural Colour Solution (HNCS)5, позволяющей
                                   пользователям делать великолепные снимки с воздуха с разрешением в 20 мегапикселей и
                                   потрясающими цветами.
                               </p>
                           </div>
                           <div className="products__slider-box">
                               <p className="products__slider-text">
                                   Лучшая беспилотная технология аэросъемки
                               </p>
                               <div ref={sliderRef} className="products__slider">
                                   <div className="products__slider-item">
                                       <img src={slider} alt="" className="products__slider-img"/>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="scroll__btn">
                       <a href="#benefits">
                           <img src={arrow} alt=""/>
                       </a>
                   </div>
               </div>
            </section>
        </div>
    );
}

export default Two;