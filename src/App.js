import './App.css';

import { Article } from "./components/Article";
import { Brand } from "./components/Brand";
import { Cta } from "./components/Cta";
import { Feature } from "./components/Feature";
import { Navbar } from "./components/Navbar";

import {Blog} from './containers/Blog';
import {Features} from './containers/Features';
import {Footer} from './containers/Footer';
import {Header} from './containers/Header';
import {Possibility} from './containers/Possibility';
import {WhatGPT3} from './containers/WhatGPT3';


export const App = () => {
  return <div className="App">
    <div className="gradient__bg">
      <Navbar/>
      <Header/>
    </div>
    <Brand/>
    <WhatGPT3/>
    <Features/>
    <Possibility/>
    <Cta/>
    <Blog/>
    <Footer/>
  </div>;
};

export default App;
