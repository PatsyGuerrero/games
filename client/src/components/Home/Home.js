import React from 'react';
import Cards from '../Cards/Cards.js';
import Header from '../Header/Header.js';
import {useSelector} from "react-redux";
import GenreFilter from '../GenreFilter/GenreFilter.js';
import Rating from '../Ordenamiento/OrdenMostrar.js';
import Ascendente from '../Ascendente/Ascendente.js';
import User from '../User/User.js';

export function Home() {

  let {filterComponent,ratingComp, userComp} = useSelector((state) => state.isLogging);
  let ordenar = useSelector((state) => state.ordenar);
  // let userState = useSelector((state) => state.user);

  // console.log('rating', ratingComp);
  // console.log('filterComponent', filterComponent);

  if (filterComponent) {
    return (
      <>
        <Header/>
        <GenreFilter/>
      </>
    );
  }

  if (ratingComp) {
    return (
      <>
        <Header/>
        <Rating/>
      </>
    );
  }

  if (ordenar===true) {
    return (
      <>
        <Header/>
        <Ascendente/>
      </>
    );
  }

  if (userComp) {
    return (
      <>
        <Header/>
        <User />
      </>
    );
  }

  
  return (  
    <>
        <Header/>
        <Cards />
        <User />
    </>
 )


};

export default Home;