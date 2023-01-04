import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';

import { images } from '../../constants'

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
   <div className='app__wrapper_info'>
    <SubHeading title="Experimente novos sabores"/>
    <h1 className='app__header-h1'>O restaurante certo para a sua dieta</h1>
    <p className='p__opensans' style={{ margin: '2rem 0'  }}>A humilde m
    ensagem de texto ainda é uma das formas mais eficazes de contatar as pessoas em massa e é 
    perfeitamente adequada para o setor de hospitalidade. Facilita a comunicação
     rápida e eficaz entre colaboradores, hóspedes e clientes, o que 
    é extremamente importante para bares e restaurantes.</p>
    <button type='button' className='button'>Explore o menu</button>
   </div>
   <div className='app__wrapper_img'>
    <img src={images.welcome} alt='header img'></img>
   </div>
  </div>
);

export default Header;
