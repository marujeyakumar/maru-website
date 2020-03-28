import React, {Component} from 'react';
import { BrowserRouter as Router, Switch} from 'react-router-dom';

import PortfolioSingle from './Pages/PortfolioSingle';
import ScrollToTopRoute from './ScrollToTopRoute';

class App extends Component{
    componentDidMount() {
      this.props.hideLoader();
  }
  render(){
    return(
        <Router>
           <Switch>
             <ScrollToTopRoute exact={true} path={'/'} component={PortfolioSingle} />
           </Switch>
        </Router>
    );
  }
}

export default App;

