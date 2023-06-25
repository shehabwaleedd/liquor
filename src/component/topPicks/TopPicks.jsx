import React from 'react';
import 'swiper/swiper-bundle.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Controller } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './TopPicks.css';
import Data from './Data';

const TopPicks = () => {
    const [itemCounts, setItemCounts] = React.useState(Data.map(() => 0));

    const handleIncrement = (index) => {
        setItemCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] += 1;
            return newCounts;
        });
    };

    const handleDecrement = (index) => {
        setItemCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] = Math.max(0, newCounts[index] - 1);
            return newCounts;
        });
    };

    return (
        <section className="toppicks section">
            <h2 className="picks_title">Curated Picks</h2>
            <div className="toppicks__container">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    className="toppicks__carousel"
                    slidesPerView={3}
                    spaceBetween={5}
                    loop={true}
                    navigation
                    pagination={{ clickable: true }}
                >
                    <div className="toppicks__cards">
                        {Data.map(({ id, title, alcohol, image, price }, index) => (
                            <SwiperSlide key={id}>
                                <div className="toppicks__card">
                                    <img src={image} alt="" />
                                    <div className="cards__bottom">
                                        <h2>{title}</h2>
                                        <p className="card__subtitle">{alcohol}</p>
                                        <div className="name__add-cart">
                                            <p className="card__price">EGP {price}</p>
                                            <div className="cart__button">
                                                <i className="bx bx-minus" onClick={() => handleDecrement(index)}></i>
                                                <p>{itemCounts[index]}</p>
                                                <i className="bx bx-plus" onClick={() => handleIncrement(index)}></i>
                                            </div>
                                        </div>
                                        <button className="toppicks__button button button--flex">
                                            <h4>ADD TO CART</h4>
                                        </button>
                                    </div>
                                    <div className="toppicks__like">
                                        <i className="bx bx-heart"></i>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </div>
        </section>
    );
};

export default TopPicks;
