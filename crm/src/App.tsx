import { useContext, useState } from 'react';
import './App.css';
import { Outlet, Link, useLocation, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import { Button } from 'antd';

function App() {
  const { isLoggedIn, logout } = useAuth();

  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to='/login' />
  }

  return <>
    {isLoggedIn && (
      <nav className='nav'>
        <ul className='nav__ul'>
          <li className={location.pathname === '/' ? 'active' : undefined}>
            *<Link to='/'>Заявки</Link>
          </li>
          <li className={location.pathname === '/employees' ? 'active' : undefined}>
            *<Link to='/employees'>Сотрудники</Link>
          </li>
        </ul>
        <div>
          <Button onClick={logout} type="primary" size="large">Выход</Button>
        </div>
      </nav>
    )}
    <main>
      <Outlet />
    </main>
    <footer></footer>
  </>
}

export default App;
