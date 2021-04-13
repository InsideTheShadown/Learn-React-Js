import logo from './logo.svg';
import React, {useEffect} from 'react';
import { Link, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import TodoFeature from './features/Todo';
import SongFeature from './features/Song';
import ColorBox from './features/ColorBox';
import Counter from './features/Counter';
import Album from './features/Song/Album';
import NotFound from '../src/components/NotFound';
import productApi from './api/productApi';
import CounterFeature from './features/CounterRedux';
import Header from './components/Header';

function App() {

  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit : 10,
      };
      const products = await productApi.getAll(params);// gọi đến fileApi rồi fileApi gọi tk axiosClient
      console.log(products);
    }
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Header/>

      <Switch>
        <Redirect from="/home" to="/" exact></Redirect>
        {/* <Redirect from = "/home" to= "/"></Redirect> */}
        {/* <Redirect form = "posts-list/:postId" to = "posts/:postId"></Redirect> */}
        <Route path="/todos" component={TodoFeature} exact />
        <Route path="/albums" component = {SongFeature} />
        {/* <Route path="/todos" component={TodoFeature} /> */}
        {/* <Route component={NotFound} /> */}
      </Switch>
    </div>
  );
}
export default App;
