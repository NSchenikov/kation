import { useEffect, useState } from 'react';
import { Slider } from '../../components/slider/slider';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WorkIcon from '@mui/icons-material/Work';
import pic1 from './../../img/shutterstock_1536927203.jpg';
import 'animate.css/animate.min.css';
import { ServiceList } from '../../components/serviceList/serviceList';
import { Carousel } from '../../components/carousel/carousel';
import './mainpage.css';
import { fetchData } from '../../utilities/API';

export const Mainpage = () => {

  const [serviceArr, setServiceArr] = useState([]);
  const [carouselImgArr, setCarouselImgArr] = useState([]);
  const [serviceGalleryArr, setServiceGalleryArr] = useState([]);

  const Servic = 'Services';
  const carouselImg = 'carouselImg';
  const serviceGallery = 'serviceGallery';

  useEffect(() => {
    fetchData({table: Servic})
      .then((res) => {
        setServiceArr(res)
      })
      fetchData({table: carouselImg})
      .then((res) => {
        if (typeof res === 'string') {
          const urls = res.split(',').map(url => url.trim());
          
          const cleanedUrls = urls.map(url => {
            return url.replace(/[''[\]]/g, '');
          });
          setCarouselImgArr(cleanedUrls);
        } 
      })
      fetchData({table: serviceGallery})
      .then((res) => {
        setServiceGalleryArr(res) //картинки для галереи. Пропсами закинуть в галерею
      })
    
  }, [])

  const renderPros = () => {
    return (
      <div className="items">
        <div className="item a">
          <AssignmentIcon className='ProsIcon' />
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
            <LocalOfferIcon className='ProsIcon' />
          <div className="item-description">
            Гибкие цены
            <br />
            на гальваническое
            <br />
          покрытие
          </div>
        </div>
        <div className="item c">
            <AccessTimeIcon className='ProsIcon' />
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
            <WorkIcon className='ProsIcon' />
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
          <div className='AnimationOnScrollRight'>{renderPros()}</div>
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
            {renderAnimatedPros()}
          </div>
        </div>
        <ServiceList heading={'УСЛУГИ'} array={serviceArr} />
         <div className="gallery">
           <h1 className='galleryHeading'>ГАЛЕРЕЯ</h1>
           <div className='AnimationOnScrollRight'>
             <Carousel images={carouselImgArr} />
             </div>
         </div>
      </div>
    </div>
  );
};