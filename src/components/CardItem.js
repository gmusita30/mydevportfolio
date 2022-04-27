import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

function CardItem(props) {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (
    <>
      <li className='cards__item'>
        <div data-aos="flip-right" className='cards__item__link' >
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <button class="glow-on-hover" style={{marginTop: "10px", width: "70px", height: "40px"}} onClick={props.onClick}>View</button>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
