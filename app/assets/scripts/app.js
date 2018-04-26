import 'jquery';
import 'popper.js';
import 'bootstrap';

import Header from './modules/Header';
import RevealOnScroll from './modules/RevealOnScroll';
import LoadingPage from './modules/LoadingPage';

const header = new Header();
const revealServices = new RevealOnScroll('.services__item', '90%');
const loadingPage = new LoadingPage();