import React from 'react';
import { Route } from 'react-router-dom'
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import LoadableFunc from '../../common/loadable'
import './index.module.scss'

const Home = LoadableFunc(import('../home'));
const TodayMune = LoadableFunc(import('../todayMune'));

const App = () => (
    <LocaleProvider locale={zhCN}>
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/todayMune" component={TodayMune}/>
        </div>
    </LocaleProvider>
);

export default App