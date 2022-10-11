import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import loadable from '@/components/Loadable';
import Rostering from '@/pages/Rostering';


// 数据统计
const User = loadable(
  () => import(/* webpackChunkName: "card" */ '@/pages/User'),
);
const RosteringDetail = loadable(
  () => import(/* webpackChunkName: "data" */ '@/pages/RosteringDetail'),
);
const CustomerList = loadable(
  () => import(/* webpackChunkName: "data" */ '@/pages/CustomerList'),
);
const Attendance = loadable(
  () => import(/* webpackChunkName: "data" */ '@/pages/Attendance'),
);
const ManageList = loadable(
  () => import(/* webpackChunkName: "data" */ '@/pages/ManageList'),
);
const Salary = loadable(
  () => import(/* webpackChunkName: "data" */ '@/pages/Salary'),
);

class RouterApp extends Component {
  componentDidCatch(e: any) {
    console.log('router-err', e);
  }
  render() {
    return (
      <Switch>
        <Route path='/rostering' exact component={Rostering} />
        <Route path='/' exact component={Rostering} />
        <Route path='/demo' exact component={User} />
        <Route path='/rosteringDetail' exact component={RosteringDetail} />
        <Route path='/customerList' exact component={CustomerList} />
        <Route path='/attendance' exact component={Attendance} />
        <Route path='/manageList' exact component={ManageList} />
        <Route path='/salary' exact component={Salary} />
      </Switch>
    );
  }
}
export default RouterApp;
