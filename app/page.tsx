"use client";

import React, { useEffect, useState} from 'react';
import Header from './components/header';
import Copyright from './components/copyright';
import Section_1 from './components/section-1';
import Section_2 from './components/section-2';
import Section_3 from './components/section-3';
import Section_4 from './components/section-4';
import Footer from './components/footer';
import Details from './components/details';
import { bucketCounter } from './constants';

function page() {
  return (
    <div className="container">
      <div className="container-1">
        <Header/>
        <Section_1 />
      </div>
      <div className="container-2">
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Footer />
      </div>
      <Copyright />
    </div>
  )
}

export default page;