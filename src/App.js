import './App.css';
import {BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { SideNav } from './components/SideNav';
import { Footer } from './components/Footer';
import { Kiosk } from './components/Kiosk';
import { Menu } from './components/Menu/Menu';
import { auth } from './actions/auth-api';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const isLoggedIn=useSelector(state=>state.kiosks.isAuth)
  const dispatch=useDispatch()
  useEffect(() => {
    if (localStorage.getItem("refresh_token")) {
      dispatch(auth(() => {
      }));
      const refreshTokenInterval = setInterval(() => {
        dispatch(auth(() => {
        }));
      }, 60000);
      return () => {
        clearInterval(refreshTokenInterval);
      };
    }

  }, []);
  return (
<BrowserRouter>
      {isLoggedIn && (
        <>
          <Header />
          <SideNav />
        </>
      )}
      <Routes>
        <Route path="/login" element={<Login isLoggedIn={isLoggedIn}/>} />
        {isLoggedIn ? (
          <>
          <Route path="/kiosks" element={<Home />} />
          <Route path="/" element={<div></div>} />
          <Route path="/kiosks/:id" element={<Kiosk isLoggedIn={isLoggedIn}/>}/>
          <Route path="/menu" element={<Menu/>}/>
          </>
        ) : (
          <>
          <Route path='/'
            element={<Navigate to="/login" replace />} // Перенаправление на /login при неаутентифицированном пользователе
          />
          <Route path='/kiosks'
            element={<Navigate to="/login" replace />} // Перенаправление на /login при неаутентифицированном пользователе
          />
          </>
        )}
      </Routes>
      {isLoggedIn && <Footer />}
    </BrowserRouter>
  );
};
export default App;