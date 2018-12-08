import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Router } from 'react-router';
import Home from './containers/index'
import 'antd/dist/antd.css'
import Order from './containers/order'
import My from './containers/my'
import Footer from './components/Footer'
import Header from './components/Header'
import ResearchReport from './containers/researchReport'
import StockResearch from './containers/stockResearch'
import Viewpoint from './containers/viewpoint'
import Activity from './containers/activity'
import systemManage from './containers/systemManage'
import performance from './containers/performance'
import { createHashHistory } from 'history';
const history = createHashHistory();
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Header />
          <Switch>
            <Route path='/order' component={Order} />
            <Route path='/my' component={My} />
            <Route path='/index' component={Home} />
            <Route path='/researchReport' component={ResearchReport} />
            <Route path='/stockResearch' component={StockResearch} />
            <Route path='/viewpoint' component={Viewpoint} />
            <Route path='/activity' component={Activity} />
            <Route path='/performance' component={performance} />
            <Route path='/systemManage' component={systemManage} />
            <Route exact path='/' component={Home} />
            <Redirect to="/" />
          </Switch>
          <Footer />
        </div>
      </Router >
    );
  }
}

export default App;