
import { Slider } from '../../components/slider/slider';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WorkIcon from '@mui/icons-material/Work';
import 'animate.css/animate.min.css';
import { ServiceList } from '../../components/serviceList/serviceList';
import { Carousel } from '../../components/carousel/carousel';
import './mainpage.css';
import { Services } from '../../utilities/serivice';
import { useInView } from 'react-intersection-observer';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedItem = styled.div`
  animation: ${fadeIn} 6s ease-in-out forwards;
`;

export const Mainpage = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const renderPros = () => {
    return (

      <div className="items">
      <AnimatedItem className="item a">

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

      </AnimatedItem>
      <AnimatedItem className="item b">

          <LocalOfferIcon style={{ fontSize: 'XXX-Large' }} />
        <div className="item-description">
          Гибкие цены
          <br />
          на гальваническое
          <br />
        покрытие
        </div>

      </AnimatedItem>
      <AnimatedItem className="item c">

          <AccessTimeIcon style={{ fontSize: 'XXX-Large' }} />
          <div className="item-description">
            Исполнение заказа
            <br />
            согласно срокам
            <br />
            и договоренностью
            <br />с клиентом
          </div>

      </AnimatedItem>
      <AnimatedItem className="item d">

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

      </AnimatedItem>

      </div>
    )
  }

  return (
    <div className="wrapper">
      <Slider />
      <div className="main-content">
        <h1 className="head">ПРЕИМУЩЕСТВА</h1>
        <div ref={ref}>
          {inView ? (
            <div>
                  {renderPros()}
              </div>
          ) : (
            <div style={{ height: '100px' }}>
            </div>
          )}
        </div>
      </div>
      <ServiceList heading={'УСЛУГИ'} array={Services} />
      <div className="gallery">
        <h1>ГАЛЕРЕЯ</h1>
        <Carousel />
      </div>
    </div>
  );
};



