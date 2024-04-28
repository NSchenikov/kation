import { useState } from 'react';
import { ServiceCard } from '../serviceCard/serviceCard';
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './serviceList.css';

export const ServiceList = ({ heading, array }) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleAnimationEnd = () => {
    setHasAnimated(true);
  };

  const renderServiceCards = () => {
    return array.map((card, index) => (
      <ServiceCard
        key={index}
        background={card.color}
        backgroundImg={card.url ? `url(${card.url})` : ''}
        name={card.name}
        descr={card.descr ? card.descr : ''}
      />
    ));
  };

  return (
    <div className="wrap">
      <div className="headerWrapper">
        <h1>{heading}</h1>
      </div>
      {!hasAnimated && (
        <AnimationOnScroll
          animateIn="animate__bounceInLeft"
          duration={2}
          afterAnimatedIn={handleAnimationEnd}
        >
          <div className="cardsWrapper">{renderServiceCards()}</div>
        </AnimationOnScroll>
      )}
      {hasAnimated && <div className="cardsWrapper">{renderServiceCards()}</div>}
    </div>
  );
};