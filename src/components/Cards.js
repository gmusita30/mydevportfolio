import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <>
    <div id="projects" className='cards'>
      <h1 className="card__heading">My Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/remindmed15.png'
              text='RemindMed: Medication Reminder and Tracker using Optical Character Recognition and Text-to-Speech'
              path='/remindmed'
            />
            <CardItem
              src='images/rootmates.png'
              text='Online Ordering System Designated For Custom Printing'
              path='/rootmates'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/ibgame5.png'
              text='In-between Game using React JS'
              path='/ibgame'
              href="#ibgame"
            />
            <CardItem
              src='images/nodeblog.png'
              text='Siklista Blog using NodeJS'
              path='/nodeblog'
            />
            <CardItem
              src='images/widtw.png'
              text='What I did this Weekend blog using React JS'
              path='/widtw'
              href="/widtw"
            />
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}

export default Cards;
