'use client';
import { useState } from 'react';
import { useEffect } from 'react';
import Styles from './Promo.module.css';
export const Promo = () => {
  const [codeIsVisible, setCodeIsVisible] = useState(false);
  const handleButtonClick = () => {
    setCodeIsVisible(!codeIsVisible);
  };
  useEffect(() => {
    let timeout;
    if (codeIsVisible) {
      timeout = setTimeout(() => {
        setCodeIsVisible(false);
      }, 5000);
    }
    return () => {
      clearInterval(timeout);
    };
  }, [codeIsVisible]);
  return (
    <section className={Styles['promo']}>
      <div className={Styles['description-block']}>
        <h2 className={Styles['title']}>Твой промо-код</h2>
        <p className={Styles['description']}>
          Скидка на все курсы Яндекс Практикума для пользователей нашего сайта!
        </p>
        <button className={`button ${Styles['button']}`} onClick={handleButtonClick}>
          {codeIsVisible ? <span className={Styles['code']}>WEBTEENS10</span> : 'Получить код'}
        </button>
      </div>
      <img src="/images/promo-illustration.svg" alt="Собака" className="image" />
    </section>
  );
};
