import 'jquery';
import 'popper.js';
import 'bootstrap';

import Header from './modules/Header';
import RevealOnScroll from './modules/RevealOnScroll';

const header = new Header();
const revealServices = new RevealOnScroll('.services__item', '90%');