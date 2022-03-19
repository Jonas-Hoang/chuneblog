import React from 'react';


import {SubHeading} from '../../components';
import {images} from '../../constants';
import {BsInstagram, BsArrowLeftShort, } from 'react-icons/bs';
import './Gallery.css';

const Gallery = () => (
  <div className='app__gallery flex__center'>
    <div className='app__gallery-content'>
      <SubHeading tittle='Instagram'/>
      <h1 className='headtext__cormorant'>Photo Gallery</h1>
      <p className='p__cormorant flex__center' style={{ color:'#aaa',marginTop:'2rem' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
      </p>
      <div className='app__button' style={{ marginTop:'2rem' }}>
      <button className='custom__button' type='button'>View more</button>
      </div>
      
    </div>
    
  </div>
);

export default Gallery;
