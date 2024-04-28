import { useState } from 'react';
import { Slider } from '../../components/slider/slider';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WorkIcon from '@mui/icons-material/Work';
import pic1 from './../../img/shutterstock_1536927203.jpg';
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ServiceList } from '../../components/serviceList/serviceList';
import { Carousel } from '../../components/carousel/carousel';
import './mainpage.css';
import { Services } from '../../utilities/serivice';

export const Mainpage = () => {

  const [hasAnimated, setHasAnimated] = useState(false);

  const handleAnimationEnd = () => {
        setHasAnimated(true);
      };

  const renderPros = () => {
    return (
      <div className="items">
        <div className="item a">
          <AssignmentIcon style={{ fontSize: 'XXX-Large' }} />
          <div className="item-description">
            Возможность покры-
            <br />
            тия сложных
            <br />
            конструкций
            <br />
            по техническому
            <br />
            заданию заказчика
          </div>
        </div>
        <div className="item b">
            <LocalOfferIcon style={{ fontSize: 'XXX-Large' }} />
          <div className="item-description">
            Гибкие цены
            <br />
            на гальваническое
            <br />
          покрытие
          </div>
        </div>
        <div className="item c">
            <AccessTimeIcon style={{ fontSize: 'XXX-Large' }} />
            <div className="item-description">
              Исполнение заказа
              <br />
              согласно срокам
              <br />
              и договоренностью
              <br />с клиентом
            </div>
        </div>
        <div className="item d">
            <WorkIcon style={{ fontSize: 'XXX-Large' }} />
            <div className="item-description">
              Качественное
              <br />
              гальваническое
              <br />
              покрытие согласно
              <br />
              ГОСТам
            </div>
        </div>
        <img
          className="e"
          src={pic1}
          style={{ width: '220px', height: '300px' }}
        />
      </div>
    );
  };

  const renderAnimatedPros = () => {
    return (
      <div>
        <AnimationOnScroll
          animateIn="animate__bounceInRight"
          duration={2}
          afterAnimatedIn={handleAnimationEnd}
        >
          <div>{renderPros()}</div>
        </AnimationOnScroll>
      </div>
    );
  };

  return (
    <div>
      <div className="wrapper">
      <Slider />
        <div className="main-content">
          <h1 className="head">ПРЕИМУЩЕСТВА</h1>
          <div>
            {!hasAnimated && renderAnimatedPros()}
            {hasAnimated && renderPros()}
          </div>
        </div>
        <ServiceList heading={'УСЛУГИ'} array={Services} />
         <div className="gallery">
           <h1>ГАЛЕРЕЯ</h1>
           <AnimationOnScroll animateIn="animate__bounceInRight" duration={2}>
             <Carousel />
           </AnimationOnScroll>
         </div>
      </div>
    </div>
  );
};