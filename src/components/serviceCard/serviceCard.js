import { Button } from '../button/button'
import './serviceCard.css'

export const ServiceCard = ({color, name, descr}) => {
    return (
        <div className='cardBox'>
            <div className='material' style={{background: color}}></div>
            <div className='material-header'>
                <h4>{name}</h4>
            </div>
            <div className='description'>{descr}</div>
            {/* <button className='btn'>Подробнее</button> */}
            <Button/>
        </div>
    )
}