import {Services} from './../../utilities/serivice'
import { ServiceCard } from '../serviceCard/serviceCard'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './serviceList.css'

export const ServiceList = () => {
    return (
        <div className='wrap'>
            <div className='headerWrapper'><h1>УСЛУГИ</h1></div>
            <AnimationOnScroll animateIn="animate__bounceInLeft" duration={2}>
            <div className='cardsWrapper'>
                {Services.map((card, index) => {
                    return (
                        <ServiceCard key={index} color={card.color} name={card.name} descr={card.descr}/>
                    )
                })}
            </div>
            </AnimationOnScroll>
        </div>
    )
}