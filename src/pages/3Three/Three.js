import React from 'react';


import arrow from "../../assets/images/arrow-down.png";
import benefits1 from '../../assets/images/benefits 1.jpg'
import benefits2 from '../../assets/images/benefits 2.jpg'
import benefits3 from '../../assets/images/benefits 3.jpg'
import benefits4 from '../../assets/images/benefits 4.jpg'

function Three(props) {
    return (<div>
        <section id='benefits' className="page-section benefits">
           <div className='page-section__wrapper'>
               <div className="container">
                   <h3 className="title benefits__title">Преимущества</h3>
                   <div className="benefits__items">

                       <div className="benefits__item benefits__item-1">
                           <div className="benefits__num">1</div>
                           <div className="benefits__img">
                               <img src={benefits1} alt=""/>
                           </div>
                           <div className="benefits__info">
                               <h4 className="benefits__info-title">
                                   Интеллектуальные
                                   режимы
                               </h4>
                               <p className="benefits__info-text">
                                   Mavic 2 унаследовал 6 стандартных режимов интеллектуальной съемки
                                   QuickShot:Roket/ Dronie/ Circle/ Helix/ Boomerang/ Asteroid.
                               </p>
                           </div>
                       </div>

                       <div className="benefits__item">
                           <div className="benefits__num">2</div>
                           <div className="benefits__img">
                               <img src={benefits2} alt=""/>
                           </div>
                           <div className="benefits__info">
                               <h4 className="benefits__info-title">
                                   Active Track 2.0
                               </h4>
                               <p className="benefits__info-text">
                                   Усовершенствованный режим второго поколения распознаёт и отслеживает объекты ещё
                                   точнее, быстрее и умнее.
                               </p>
                           </div>
                       </div>

                       <div className="benefits__item benefits__item-3">
                           <div className="benefits__num">3</div>
                           <div className="benefits__img">
                               <img src={benefits3} alt=""/>
                           </div>
                           <div className="benefits__info">
                               <h4 className="benefits__info-title">
                                   Панорамная
                                   съемка
                               </h4>
                               <p className="benefits__info-text">
                                   Mavic 2 поддерживает 4 режима
                                   панорамной съёмки: сферическая,
                                   180 градусов,
                                   горизонтальная, вертикальная
                               </p>
                           </div>
                       </div>

                       <div className="benefits__item benefits__item-4">
                           <div className="benefits__num">4</div>
                           <div className="benefits__img">
                               <img src={benefits4} alt=""/>
                           </div>
                           <div className="benefits__info">
                               <h4 className="benefits__info-title">
                                   Крутая
                                   камера!
                               </h4>
                               <p className="benefits__info-text">
                                   Технология Hyperlapse в четырёх режимах исполнения.
                                   Улучшенный фото режим HDR
                                   Функция HyperLight для съёмки в условиях слабого освещения
                                   4К съёмка
                               </p>
                           </div>
                       </div>

                   </div>
               </div>
               <div className="scroll__btn">
                   <a href="#specification">
                       <img src={arrow} alt=""/>
                   </a>
               </div>
           </div>
        </section>
    </div>);
}

export default Three;