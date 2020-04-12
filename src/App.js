import React, {Component} from 'react';
import { BrowserRouter as Router, Switch} from 'react-router-dom';

import PortfolioSingle from './Pages/PortfolioSingle';
import ScrollToTopRoute from './ScrollToTopRoute';
import AboutMe from './components/Portfolios/AboutMe';

class App extends Component{
   
  render(){
    return(
        <Router>
           <Switch>
             <ScrollToTopRoute exact={true} path={'/'} component={PortfolioSingle} />
             <ScrollToTopRoute exact={true} path={'/About'} component={AboutMe} />
            
           </Switch>
        </Router>
    );
  }
}

export default App;

