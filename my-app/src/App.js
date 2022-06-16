import './App.css';
import Main from './components/Main/Main';
import { Route, Switch } from "react-router-dom";
import Films from './components/Films/Films';
import Search from './components/Search/Search';
import TMDB from './components/FooterNavigation/TMDB';
import Contact from './components/FooterNavigation/Contact';
import General from './components/FAQMenu/General';
import TVShows from './components/TVShows/TVShows';
import Guidelines from './components/FooterNavigation/Guidelines';
import Terms from './components/FooterNavigation/Terms';
import Api from './components/FooterNavigation/Api';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter } from 'react-router-dom';

function App() {
  //методы апи
  return (
	  <BrowserRouter>
    <Switch>
       <Route exact path='/' component={Main}></Route>
       <Route path='/Films' component={Films}/>
       <Route path='/TvShow' component={TVShows}/>
       <Route path='/Search' component={Search}/>
       <Route path='/TMDB' component={TMDB}/>
       <Route path='/Contact' component={Contact}/>
       <Route path='/General' component={General}/>
       <Route path='/Main' component={Main}/>
       <Route path='/Guidelines' component={Guidelines}/>
       <Route path='/Terms' component={Terms}/>
       <Route path='/Api' component={Api}/>
	   <Route path='*' component={NotFound}></Route>
    </Switch>
	</BrowserRouter>
  );
}

export default App;


