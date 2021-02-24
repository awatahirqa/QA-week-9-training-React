'use strict'
import './App.css';

import MyHeader from './components/parent-child/myHeader';

import { Switch, Route, BrowserRouter as Router, Link} from 'react-router-dom';


import Tesco from './components/Datarequests/Tesco';
import FilmReq from './components/Datarequests/Excersise/FimlRequest';
const App = ()=> {
  return (
    <FilmReq/>
);
}

export default App;