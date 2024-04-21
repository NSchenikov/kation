import { ServiceCard } from '../serviceCard/serviceCard';
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './serviceList.css';

export const ServiceList = ({ heading, array }) => {
  return (
    <div className="wrap">
      <div className="headerWrapper">
        <h1>{heading}</h1>
      </div>
      <AnimationOnScroll animateIn="animate__bounceInLeft" duration={2}>
        <div className="cardsWrapper">
          {array.map((card, index) => {
            return (
              <ServiceCard
                key={index}
                background={card.color}
                backgroundImg={card.url ? `url(${card.url})` : ''}
                name={card.name}
                descr={card.descr ? card.descr : ''}
              />
            );
          })}
        </div>
      </AnimationOnScroll>
    </div>
  );
};
