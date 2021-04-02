import React from 'react';
import { Route, Switch } from 'react-router-dom';



// FREE






import HomePage from './pages/HomePage';
import AdvancedNavPage from './pages/AdvancedNavPage';
import NavigationNavPage from './pages/NavigationNavPage';
import ModalsNavPage from './pages/ModalsNavPage';
import SpinnerPage from './pages/SpinnerPage'
import CSSNavPage from './pages/CSSNavPage';
class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/HomePage' component={HomePage} />
     
        <Route exact path='/advanced' component={AdvancedNavPage} />
        <Route exact path='/navigation' component={NavigationNavPage} />
        <Route exact path='/' component={ModalsNavPage} />
        <Route exact path='/css' component={CSSNavPage} />
        <Route path='/components/spinner' component={SpinnerPage} />





        
        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
