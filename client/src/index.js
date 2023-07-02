import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import { Provider } from 'react-redux';
import store from './redux/Store';
import PublicRoute from './components/Routes/PublicRoute';
import PrivateRoute from './components/Routes/PrivateRoute';

import Donor from './pages/Dashboard/Donor';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />

        <Route path='/login' element={<PublicRoute><Login /></PublicRoute>} />


        <Route path='/register' element={<PublicRoute><Register /></PublicRoute>} />
        <Route path='/donor' element={<PrivateRoute><Donor /></PrivateRoute>} />





      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

